# Email Notifications Setup

This document outlines how email notifications are set up for the Educate Nepal Initiative backend.

## Overview

Email notifications are sent in the following scenarios:

1. **Donation Confirmation**: Sent to the donor after a successful donation
2. **Donation Notification**: Sent to the admin when a new donation is received
3. **Contact Form Submission**: Sent to the admin when someone submits the contact form
4. **Contact Confirmation**: Sent to the user who submitted the contact form

## Configuration

### Environment Variables

Make sure these environment variables are set in your `.env` file:

```
NOTIFICATION_EMAIL=notifications@educatenepal.org
SUPPORT_EMAIL=support@educatenepal.org
AWS_REGION=us-east-1

# For local development
NODE_ENV=development
SES_ENDPOINT=http://localhost:4566
```

### Local Development

For local development, we use LocalStack to simulate AWS SES. To set it up:

1. Start the local stack:
   ```bash
   docker-compose up -d
   ```

2. Verify email addresses (only needed once):
   ```bash
   node scripts/verify-email.js
   ```

3. View sent emails in the LocalStack web interface at http://localhost:4566/_localstack/ses

## Email Templates

Email templates are located in:
- Donation emails: `src/emails/donationEmails.ts`
- Contact form emails: `src/contact/handler.ts`

## Testing

To test email notifications locally:

1. Make a POST request to the donation or contact endpoints
2. Check the LocalStack web interface to see the sent emails
3. Verify that both the admin and user (if applicable) receive the correct emails

## Production Setup

In production, make sure to:

1. Set `NODE_ENV=production`
2. Configure real AWS credentials with SES access
3. Verify all sending and receiving email addresses in AWS SES
4. Move out of the SES sandbox if needed for higher email volumes
