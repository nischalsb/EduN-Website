import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import logger from '../utils/logger';

interface DonationNotificationParams {
  donationId: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  paymentMethod: string;
  isAnonymous: boolean;
  message?: string;
}

export async function sendDonationConfirmationEmail(
  params: DonationNotificationParams,
  sesClient: SESClient
): Promise<void> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'notifications@educatenepal.org';
    const { donorName, donorEmail, amount, paymentMethod, donationId, isAnonymous, message } = params;

    const emailParams = {
      Source: notificationEmail,
      Destination: {
        ToAddresses: [donorEmail],
      },
      Message: {
        Subject: {
          Data: 'Thank You for Your Donation to Educate Nepal Initiative',
        },
        Body: {
          Html: {
            Data: `
              <html>
                <body>
                  <h2>Thank You for Your Generous Donation!</h2>
                  <p>Dear ${donorName},</p>
                  <p>We are incredibly grateful for your support of Educate Nepal Initiative. Your contribution will help us continue our mission to provide education to underprivileged children in Nepal.</p>
                  
                  <h3>Donation Details:</h3>
                  <ul>
                    <li><strong>Donation ID:</strong> ${donationId}</li>
                    <li><strong>Amount:</strong> NPR ${amount.toLocaleString()}</li>
                    <li><strong>Payment Method:</strong> ${formatPaymentMethod(paymentMethod)}</li>
                    ${message ? `<li><strong>Your Message:</strong> ${message}</li>` : ''}
                  </ul>
                  
                  <p>Your donation is ${isAnonymous ? 'anonymous' : 'not anonymous'}. Thank you for your trust in our cause.</p>
                  
                  <p>If you have any questions about your donation, please reply to this email or contact us at support@educatenepal.org</p>
                  
                  <p>With gratitude,<br>The Educate Nepal Initiative Team</p>
                  
                  <hr>
                  <p style="color: #666; font-size: 12px;">
                    This is an automated message. Please do not reply to this email.
                  </p>
                </body>
              </html>
            `,
          },
          Text: {
            Data: `
              Thank You for Your Generous Donation!
              
              Dear ${donorName},
              
              We are incredibly grateful for your support of Educate Nepal Initiative. Your contribution will help us continue our mission to provide education to underprivileged children in Nepal.
              
              DONATION DETAILS:
              - Donation ID: ${donationId}
              - Amount: NPR ${amount.toLocaleString()}
              - Payment Method: ${formatPaymentMethod(paymentMethod)}
              ${message ? `- Your Message: ${message}\n` : ''}
              Your donation is ${isAnonymous ? 'anonymous' : 'not anonymous'}. Thank you for your trust in our cause.
              
              If you have any questions about your donation, please contact us at support@educatenepal.org
              
              With gratitude,
              The Educate Nepal Initiative Team
              
              ---
              This is an automated message. Please do not reply to this email.
            `,
          },
        },
      },
    };

    await sesClient.send(new SendEmailCommand(emailParams));
    logger.info('Donation confirmation email sent', { donationId, email: donorEmail });
  } catch (error) {
    logger.error('Failed to send donation confirmation email', {
      error: error instanceof Error ? error.message : 'Unknown error',
      donationId: params.donationId,
    });
    // Don't throw the error to prevent donation failure just because email failed
  }
}

export async function sendDonationNotificationEmail(
  params: DonationNotificationParams,
  sesClient: SESClient
): Promise<void> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'notifications@educatenepal.org';
    const { donorName, donorEmail, amount, paymentMethod, donationId, isAnonymous, message } = params;

    const emailParams = {
      Source: notificationEmail,
      Destination: {
        ToAddresses: [notificationEmail],
      },
      Message: {
        Subject: {
          Data: `New Donation Received: NPR ${amount} from ${isAnonymous ? 'Anonymous' : donorName}`,
        },
        Body: {
          Html: {
            Data: `
              <html>
                <body>
                  <h2>New Donation Received</h2>
                  <p>A new donation has been made to Educate Nepal Initiative.</p>
                  
                  <h3>Donation Details:</h3>
                  <ul>
                    <li><strong>Donation ID:</strong> ${donationId}</li>
                    <li><strong>Donor Name:</strong> ${isAnonymous ? 'Anonymous' : donorName}</li>
                    ${!isAnonymous ? `<li><strong>Donor Email:</strong> ${donorEmail}</li>` : ''}
                    <li><strong>Amount:</strong> NPR ${amount.toLocaleString()}</li>
                    <li><strong>Payment Method:</strong> ${formatPaymentMethod(paymentMethod)}</li>
                    ${message ? `<li><strong>Donor Message:</strong> ${message}</li>` : ''}
                    <li><strong>Timestamp:</strong> ${new Date().toLocaleString()}</li>
                  </ul>
                  
                  <p>This is an automated notification. No action is required.</p>
                </body>
              </html>
            `,
          },
          Text: {
            Data: `
              NEW DONATION RECEIVED
              
              A new donation has been made to Educate Nepal Initiative.
              
              DONATION DETAILS:
              - Donation ID: ${donationId}
              - Donor Name: ${isAnonymous ? 'Anonymous' : donorName}
              ${!isAnonymous ? `- Donor Email: ${donorEmail}\n` : ''}
              - Amount: NPR ${amount.toLocaleString()}
              - Payment Method: ${formatPaymentMethod(paymentMethod)}
              ${message ? `- Donor Message: ${message}\n` : ''}
              - Timestamp: ${new Date().toLocaleString()}
              
              This is an automated notification. No action is required.
            `,
          },
        },
      },
    };

    await sesClient.send(new SendEmailCommand(emailParams));
    logger.info('Donation notification email sent to admin', { donationId });
  } catch (error) {
    logger.error('Failed to send donation notification email', {
      error: error instanceof Error ? error.message : 'Unknown error',
      donationId: params.donationId,
    });
    // Don't throw the error to prevent donation failure just because email failed
  }
}

function formatPaymentMethod(method: string): string {
  const methods: Record<string, string> = {
    khalti: 'Khalti',
    stripe: 'Credit/Debit Card',
    bank_transfer: 'Bank Transfer',
  };
  
  return methods[method] || method;
}
