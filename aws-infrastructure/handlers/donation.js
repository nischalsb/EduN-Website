const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES();

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { amount, paymentMethod, donorName, donorEmail, donorPhone, isAnonymous } = body;

    // Validate required fields
    if (!amount || !paymentMethod) {
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

    // Create donation record
    const formId = uuidv4();
    const timestamp = new Date().toISOString();

    const formData = {
      id: formId,
      formType: 'donation',
      amount: parseFloat(amount),
      paymentMethod,
      donorName: isAnonymous ? 'Anonymous' : (donorName || 'Anonymous'),
      donorEmail: isAnonymous ? null : donorEmail,
      donorPhone: isAnonymous ? null : donorPhone,
      isAnonymous: isAnonymous || false,
      createdAt: timestamp,
      status: 'pending_payment'
    };

    // Save to DynamoDB
    await dynamodb.put({
      TableName: process.env.DYNAMODB_TABLE,
      Item: formData
    }).promise();

    // Send email notification to organization
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL]
      },
      Message: {
        Subject: {
          Data: `New Donation: $${amount} via ${paymentMethod}`
        },
        Body: {
          Text: {
            Data: `
New donation received:

Amount: $${amount}
Payment Method: ${paymentMethod}
Donor: ${isAnonymous ? 'Anonymous' : (donorName || 'Not provided')}
Email: ${isAnonymous ? 'Not provided' : (donorEmail || 'Not provided')}
Phone: ${isAnonymous ? 'Not provided' : (donorPhone || 'Not provided')}

Submitted at: ${timestamp}
Donation ID: ${formId}
            `
          }
        }
      }
    };

    await ses.sendEmail(emailParams).promise();

    // Send confirmation email to donor (if not anonymous and email provided)
    if (!isAnonymous && donorEmail) {
      const confirmationEmailParams = {
        Source: process.env.SES_FROM_EMAIL,
        Destination: {
          ToAddresses: [donorEmail]
        },
        Message: {
          Subject: {
            Data: 'Thank you for your donation - Educate Nepal Initiative'
          },
          Body: {
            Text: {
              Data: `
Dear ${donorName || 'Valued Supporter'},

Thank you for your generous donation of $${amount} to Educate Nepal Initiative!

Your contribution will help us continue our mission of providing quality education to children in rural Nepal.

Donation Details:
- Amount: $${amount}
- Payment Method: ${paymentMethod}
- Donation ID: ${formId}
- Date: ${timestamp}

We will send you a receipt and updates on how your donation is being used to make a difference in the lives of Nepali children.

If you have any questions, please contact us at info@educatenepal.org.

With gratitude,
Educate Nepal Initiative Team
              `
            }
          }
        }
      };

      await ses.sendEmail(confirmationEmailParams).promise();
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Donation form submitted successfully',
        formId,
        // In a real implementation, you would return payment processing details here
        paymentIntent: {
          id: formId,
          amount: amount,
          status: 'requires_payment_method'
        }
      })
    };

  } catch (error) {
    console.error('Error processing donation form:', error);
    
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
