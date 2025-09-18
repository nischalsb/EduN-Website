import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { errorResponse, successResponse } from '@/utils/response';
import { contactFormSchema, ContactFormInput } from '@/contact/schema';
import { errorHandler } from '@/middleware/errorHandler';
import logger from '@/utils/logger';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  ...(process.env.NODE_ENV === 'development' && {
    endpoint: 'http://localhost:8000',
    credentials: {
      accessKeyId: 'dummy',
      secretAccessKey: 'dummy',
    },
  }),
});
const docClient = DynamoDBDocumentClient.from(client);
const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

interface ContactFormRecord extends ContactFormInput {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: 'new' | 'in_progress' | 'resolved';
  ipAddress?: string;
  userAgent?: string;
}

export const contactHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    logger.info('Processing contact form submission');
    
    if (!event.body) {
      return errorResponse('Request body is required', 400);
    }

    const body = JSON.parse(event.body);
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      const errorMessages = validation.error.issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message
      }));
      logger.error('Validation failed', { errors: errorMessages });
      return errorResponse('Invalid input data', 400, { errors: errorMessages });
    }

    const formData = validation.data;
    const now = new Date().toISOString();
    const submission: ContactFormRecord = {
      ...formData,
      id: `contact-${uuidv4()}`,
      createdAt: now,
      updatedAt: now,
      status: 'new',
      ipAddress: event.requestContext?.identity?.sourceIp,
      userAgent: event.headers?.['user-agent'],
    };

    // Save to DynamoDB
    const putParams: PutCommandInput = {
      TableName: process.env.CONTACT_TABLE || 'ContactFormSubmissions',
      Item: submission,
    };

    try {
      await docClient.send(new PutCommand(putParams));
      logger.info('Contact form submission saved', { submissionId: submission.id });
    } catch (error) {
      logger.error('Error saving contact form submission', { 
        error: error instanceof Error ? error.message : 'Unknown error',
        submissionId: submission.id
      });
      throw { statusCode: 500, message: 'Failed to save contact form submission' };
    }

    // Send notification email
    await sendNotificationEmail(submission, sesClient);

    // Send confirmation email to the user
    await sendConfirmationEmail(submission, sesClient);

    return successResponse({
      message: 'Thank you for contacting us! We will get back to you soon.',
      formId: submission.id,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error processing contact form', { error: errorMessage });
    return errorResponse('Failed to process contact form', 500);
  }
};

async function sendNotificationEmail(
  submission: ContactFormRecord, 
  sesClient: SESClient
): Promise<void> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'notifications@example.com';
    const emailParams = {
      Source: notificationEmail,
      Destination: {
        ToAddresses: [notificationEmail],
      },
      Message: {
        Subject: { 
          Data: `New Contact Form Submission: ${submission.subject}` 
        },
        Body: {
          Text: {
            Data: `New contact form submission received:

Name: ${submission.name}
Email: ${submission.email}${submission.phone ? `\nPhone: ${submission.phone}` : ''}${submission.interest ? `\nInterest: ${submission.interest}` : ''}

Message:
${submission.message}

Submitted at: ${submission.createdAt}
IP Address: ${submission.ipAddress || 'Not available'}
User Agent: ${submission.userAgent || 'Not available'}`
          },
        },
      },
    };

    await sesClient.send(new SendEmailCommand(emailParams));
    logger.info('Notification email sent', { submissionId: submission.id });
  } catch (error) {
    logger.error('Failed to send notification email', { 
      error: error instanceof Error ? error.message : 'Unknown error',
      submissionId: submission.id
    });
  }
}

async function sendConfirmationEmail(
  submission: ContactFormRecord,
  sesClient: SESClient
): Promise<void> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'notifications@example.com';
    const emailParams = {
      Source: notificationEmail,
      Destination: {
        ToAddresses: [submission.email],
      },
      Message: {
        Subject: { 
          Data: 'Thank you for contacting Educate Nepal Initiative' 
        },
        Body: {
          Text: {
            Data: `Dear ${submission.name},

Thank you for reaching out to Educate Nepal Initiative. We have received your message and will get back to you as soon as possible.

Here's a copy of your submission:

Subject: ${submission.subject}
Name: ${submission.name}
Email: ${submission.email}${submission.phone ? `\nPhone: ${submission.phone}` : ''}${submission.interest ? `\nInterest: ${submission.interest}` : ''}

Message:
${submission.message}

Submitted on: ${new Date(submission.createdAt).toLocaleString()}

Best regards,
The Educate Nepal Initiative Team

---
This is an automated message. Please do not reply to this email.`
          },
        },
      },
    };

    await sesClient.send(new SendEmailCommand(emailParams));
    logger.info('Confirmation email sent', { 
      submissionId: submission.id, 
      email: submission.email 
    });
  } catch (error) {
    logger.error('Failed to send confirmation email', { 
      error: error instanceof Error ? error.message : 'Unknown error',
      submissionId: submission.id,
      email: submission.email
    });
  }
}
