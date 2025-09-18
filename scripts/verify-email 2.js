const { SESClient, VerifyEmailIdentityCommand } = require('@aws-sdk/client-ses');

// Initialize SES client for local development
const sesClient = new SESClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:4566', // LocalStack endpoint
  credentials: {
    accessKeyId: 'test',
    secretAccessKey: 'test',
  },
});

// Email addresses to verify
const emails = [
  'nischalsb2059@gmail.com',
  'notifications@educatenepal.org',
  'support@educatenepal.org'
];

async function verifyEmails() {
  console.log('Starting email verification...');
  
  for (const email of emails) {
    try {
      const command = new VerifyEmailIdentityCommand({ EmailAddress: email });
      await sesClient.send(command);
      console.log(`✅ Verification email sent to: ${email}`);
    } catch (error) {
      // In LocalStack, verification might not be required, so we'll just log it
      console.log(`ℹ️  Email verification for ${email} not required in LocalStack`);
    }
  }
  
  console.log('\n📬 Check your inbox for verification emails.');
  console.log('In LocalStack, emails are not actually sent. You can use the LocalStack web interface to view them.');
}

verifyEmails().catch(console.error);
