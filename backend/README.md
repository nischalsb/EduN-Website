# Educate Nepal Initiative - Backend

This is the serverless backend for the Educate Nepal Initiative, built with AWS Lambda, API Gateway, and DynamoDB.

## Features

- **Donation Processing**: Handle one-time and recurring donations with multiple payment methods
- **Contact Form**: Process and manage contact form submissions
- **Secure API**: JWT authentication and input validation
- **Serverless**: Built with AWS Lambda for scalability and cost-efficiency

## Prerequisites

- Node.js 18.x or later
- AWS CLI configured with appropriate permissions
- AWS SAM CLI
- Docker (for local development)

## Local Development

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```env
   NODE_ENV=development
   DONATIONS_TABLE=dev-educate-nepal-donations
   CONTACT_TABLE=dev-educate-nepal-contacts
   KHALTI_SECRET_KEY=your_khalti_test_secret_key
   NOTIFICATION_EMAIL=your-email@example.com
   ```

3. Start local DynamoDB:
   ```bash
   docker run -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb
   ```

4. Create local DynamoDB tables:
   ```bash
   aws dynamodb create-table --cli-input-json file://local/dynamodb-tables/donations.json --endpoint-url http://localhost:8000
   aws dynamodb create-table --cli-input-json file://local/dynamodb-tables/contacts.json --endpoint-url http://localhost:8000
   ```

### Running Locally

1. Start the local API Gateway:
   ```bash
   sam local start-api --env-vars local/env.json
   ```

2. The API will be available at `http://localhost:3000`

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to AWS:
   ```bash
   sam deploy --guided
   ```
   Follow the prompts to configure the deployment.

## API Endpoints

### Donations

- `POST /donations` - Create a new donation
- `POST /donations/verify` - Verify a payment
- `GET /donations` - List donations (admin only)

### Contact

- `POST /contact` - Submit contact form

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| NODE_ENV | Environment (development/staging/production) | Yes |
| DONATIONS_TABLE | DynamoDB table name for donations | Yes |
| CONTACT_TABLE | DynamoDB table name for contacts | Yes |
| KHALTI_SECRET_KEY | Khalti payment gateway secret key | Yes |
| NOTIFICATION_EMAIL | Email address for notifications | Yes |

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Linting

```bash
npm run lint
```

## License

MIT
