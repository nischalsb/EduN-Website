const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES();

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, skills, availability, experience, motivation } = body;

    // Validate required fields
    if (!name || !email || !phone || !skills || !availability || !experience || !motivation) {
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

    // Create volunteer application record
    const formId = uuidv4();
    const timestamp = new Date().toISOString();

    const formData = {
      id: formId,
      formType: 'volunteer',
      name,
      email,
      phone,
      skills: Array.isArray(skills) ? skills : [skills],
      availability,
      experience,
      motivation,
      createdAt: timestamp,
      status: 'pending_review'
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
          Data: `New Volunteer Application: ${name}`
        },
        Body: {
          Text: {
            Data: `
New volunteer application received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Skills: ${Array.isArray(skills) ? skills.join(', ') : skills}
Availability: ${availability}
Experience: ${experience}
Motivation: ${motivation}

Submitted at: ${timestamp}
Application ID: ${formId}
            `
          }
        }
      }
    };

    await ses.sendEmail(emailParams).promise();

    // Send confirmation email to volunteer
    const confirmationEmailParams = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Subject: {
          Data: 'Thank you for your volunteer application - Educate Nepal Initiative'
        },
        Body: {
          Text: {
            Data: `
Dear ${name},

Thank you for your interest in volunteering with Educate Nepal Initiative!

We have received your application and will review it within 48 hours. Our team will contact you soon to discuss next steps.

Application Details:
- Application ID: ${formId}
- Submitted: ${timestamp}
- Skills: ${Array.isArray(skills) ? skills.join(', ') : skills}
- Availability: ${availability}

If you have any questions, please don't hesitate to contact us at info@educatenepal.org.

Best regards,
Educate Nepal Initiative Team
            `
          }
        }
      }
    };

    await ses.sendEmail(confirmationEmailParams).promise();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Volunteer application submitted successfully',
        formId
      })
    };

  } catch (error) {
    console.error('Error processing volunteer application:', error);
    
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
