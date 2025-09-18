const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES();

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({
          error: 'Missing required fields'
        })
      };
    }

    // Create form submission record
    const formId = uuidv4();
    const timestamp = new Date().toISOString();

    const formData = {
      id: formId,
      formType: 'contact',
      name,
      email,
      subject,
      message,
      createdAt: timestamp,
      status: 'new'
    };

    // Save to DynamoDB
    await dynamodb.put({
      TableName: process.env.DYNAMODB_TABLE,
      Item: formData
    }).promise();

    // Send email notification
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL]
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission: ${subject}`
        },
        Body: {
          Text: {
            Data: `
New contact form submission received:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

Submitted at: ${timestamp}
Form ID: ${formId}
            `
          }
        }
      }
    };

    await ses.sendEmail(emailParams).promise();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
        formId
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        error: 'Internal server error'
      })
    };
  }
};
