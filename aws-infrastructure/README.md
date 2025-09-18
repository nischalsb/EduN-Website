# AWS Forms Integration for Educate Nepal Initiative

This directory contains the AWS infrastructure code for handling form submissions from your website.

## 🏗️ Architecture

- **AWS Lambda** - Serverless functions for form processing
- **Amazon DynamoDB** - Database for storing form submissions
- **Amazon SES** - Email notifications
- **Amazon API Gateway** - REST API endpoints

## 📋 Forms Supported

1. **Contact Form** - General inquiries and messages
2. **Volunteer Application** - Volunteer registration and applications
3. **Donation Form** - Donation processing and tracking

## 🚀 Deployment Steps

### Prerequisites

1. **AWS CLI** installed and configured
2. **Node.js** 18+ installed
3. **Serverless Framework** installed globally:
   ```bash
   npm install -g serverless
   ```

### 1. Install Dependencies

```bash
cd aws-infrastructure
npm install
```

### 2. Configure AWS

Make sure your AWS CLI is configured with appropriate permissions:
- DynamoDB access
- Lambda access
- SES access
- API Gateway access

### 3. Deploy to AWS

```bash
# Deploy to development
npm run deploy:dev

# Deploy to production
npm run deploy:prod
```

### 4. Update Frontend API URL

After deployment, update the API URL in `src/services/api.ts`:

```typescript
const API_BASE_URL = 'https://your-actual-api-gateway-url.amazonaws.com/prod';
```

### 5. Configure SES Email

1. Verify your domain in AWS SES
2. Update the email addresses in `serverless.yml`:
   - `SES_FROM_EMAIL`: Your verified sender email
   - `SES_TO_EMAIL`: Where form submissions should be sent

## 📊 Data Storage

All form submissions are stored in DynamoDB with the following structure:

```json
{
  "id": "unique-form-id",
  "formType": "contact|volunteer|donation",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "status": "new|pending_review|completed",
  // ... form-specific fields
}
```

## 🔧 Local Development

```bash
# Start local development server
npm run offline
```

This will start the Lambda functions locally on `http://localhost:3000`

## 📧 Email Notifications

- **Organization**: Receives notification for every form submission
- **Users**: Receive confirmation emails (contact and volunteer forms)
- **Donors**: Receive thank you emails with donation details

## 🔒 Security

- CORS enabled for your domain
- Input validation on all forms
- Rate limiting (can be added via API Gateway)
- Secure environment variables

## 💰 Cost Estimation

- **Lambda**: ~$0.20 per 1M requests
- **DynamoDB**: ~$1.25 per GB stored
- **SES**: $0.10 per 1,000 emails
- **API Gateway**: $3.50 per 1M requests

Total estimated cost: **$5-10/month** for moderate usage

## 🛠️ Monitoring

- CloudWatch logs for all Lambda functions
- DynamoDB metrics for storage usage
- SES delivery statistics

## 📝 Next Steps

1. Deploy the infrastructure
2. Update frontend API URLs
3. Test all form submissions
4. Set up monitoring and alerts
5. Configure additional email templates if needed
