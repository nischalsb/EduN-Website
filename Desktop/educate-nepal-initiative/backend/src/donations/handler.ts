import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand, PutCommandInput, QueryCommandInput, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { SESClient } from '@aws-sdk/client-ses';
import { errorResponse, successResponse } from '@/utils/response';
import { donationInputSchema, khaltiVerificationSchema, DonationInput } from '@/donations/schema';
import { errorHandler } from '@/middleware/errorHandler';
import axios, { AxiosError } from 'axios';
import logger from '../utils/logger';
import { sendDonationConfirmationEmail, sendDonationNotificationEmail } from '@/emails/donationEmails';

// Initialize SES client
const sesClient = new SESClient({ 
  region: process.env.AWS_REGION || 'us-east-1',
  ...(process.env.NODE_ENV === 'development' && {
    endpoint: process.env.SES_ENDPOINT || 'http://localhost:8000',
    credentials: {
      accessKeyId: 'dummy',
      secretAccessKey: 'dummy',
    },
  }),
});

// Extend the error type to include statusCode
type AppError = Error & { statusCode?: number };

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

interface DonationRecord extends DonationInput {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
  paymentDetails?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  PK?: string;
  SK?: string;
  GSI1PK?: string;
  GSI1SK?: string;
}

// Khalti API response types
interface KhaltiPaymentInitiateResponse {
  pidx: string;
  payment_url: string;
  expires_at: string;
  expires_in: number;
  user_fee: number;
  fee_include: boolean;
  message?: string;
}

// Our internal response type
interface PaymentInitiationResponse {
  paymentUrl: string;
  pidx: string;
  message?: string;
}

// Helper function to get environment variable or throw error
const getEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

// Initialize tables from environment variables
const DONATIONS_TABLE = getEnvVar('DONATIONS_TABLE');

/**
 * Creates a new donation record and initiates payment
 */
export const createDonation = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestId = event.requestContext?.requestId || 'unknown';
    logger.info('Creating new donation', { requestId });
    
    if (!event.body) {
      throw { statusCode: 400, message: 'Request body is required' };
    }

    const body = JSON.parse(event.body);
    const validation = donationInputSchema.safeParse(body);

    if (!validation.success) {
      logger.error('Validation failed', { errors: validation.error.issues });
      return errorResponse('Invalid input', 400, { errors: validation.error.issues });
    }

    const donationData = validation.data;
    const donationId = uuidv4();
    const now = new Date().toISOString();

    const donation: DonationRecord = {
      ...donationData,
      id: donationId,
      status: 'pending', // Will be updated after payment verification
      createdAt: now,
      updatedAt: now,
    };

    // Save to DynamoDB
    const putParams: PutCommandInput = {
      TableName: DONATIONS_TABLE,
      Item: {
        ...donation,
        // Ensure all required DynamoDB fields are present
        PK: `DONATION#${donation.id}`,
        SK: `METADATA#${donation.id}`,
        GSI1PK: 'DONATIONS',
        GSI1SK: donation.createdAt,
      } as Record<string, any>, // Type assertion to handle dynamic properties
    };
      
    try {
      await docClient.send(new PutCommand(putParams));
      logger.info('Donation saved to DynamoDB', { donationId: donation.id });
    } catch (error) {
      logger.error('Error saving donation to DynamoDB', { 
        error: error instanceof Error ? error.message : 'Unknown error',
        donationId: donation.id,
        stack: error instanceof Error ? error.stack : undefined
      });
      throw { statusCode: 500, message: 'Failed to save donation' };
    }

    // Process payment based on method
    let result;
    switch (donationData.paymentMethod) {
      case 'khalti': {
        const paymentInitiation = await initiateKhaltiPayment(donation);
        result = {
          paymentUrl: paymentInitiation.paymentUrl,
          pidx: paymentInitiation.pidx,
          message: paymentInitiation.message || 'Payment initiated successfully',
          donationId: donation.id
        };
        break;
      }
      case 'stripe':
        // Implement Stripe integration
        throw { statusCode: 501, message: 'Stripe integration not yet implemented' };
      case 'bank_transfer':
        // For bank transfer, we just return success with instructions
        result = {
          message: 'Please transfer your donation to the following bank account',
          bankDetails: {
            bankName: 'Global IME Bank',
            accountName: 'Educate Nepal Initiative',
            accountNumber: '1234567890',
            branch: 'Kathmandu',
          },
          donationId: donation.id
        };
        
        // Update donation status to completed for bank transfer
        donation.status = 'completed';
        donation.updatedAt = new Date().toISOString();
        
        await docClient.send(new UpdateCommand({
          TableName: DONATIONS_TABLE,
          Key: { id: donation.id },
          UpdateExpression: 'SET #status = :status, updatedAt = :updatedAt',
          ExpressionAttributeNames: { '#status': 'status' },
          ExpressionAttributeValues: {
            ':status': 'completed',
            ':updatedAt': donation.updatedAt
          },
        }));
        
        break;
      default:
        throw { statusCode: 400, message: 'Invalid payment method' };
    }
    
    // Send email notifications if donor provided an email
    if (donation.donorEmail) {
      const emailParams = {
        donationId: donation.id,
        donorName: donation.donorName || 'Valued Donor',
        donorEmail: donation.donorEmail,
        amount: donation.amount,
        paymentMethod: donation.paymentMethod,
        isAnonymous: donation.anonymous || false,
        message: donation.message
      };
      
      // Send confirmation to donor
      await sendDonationConfirmationEmail(emailParams, sesClient);
      
      // Send notification to admin
      await sendDonationNotificationEmail(emailParams, sesClient);
    }
  
  return successResponse(result);
  } catch (error) {
    logger.error('Error in createDonation', { 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const err = error as AppError;
      return errorResponse(err.message || 'Internal server error', err.statusCode || 500);
    }
    return errorResponse('Internal server error', 500);
  }
}

// Export the handler wrapped with error handling middleware
export const createDonationHandler = errorHandler(createDonation);

async function initiateKhaltiPayment(donation: DonationRecord): Promise<PaymentInitiationResponse> {
  const khaltiSecretKey = process.env.KHALTI_SECRET_KEY;
  if (!khaltiSecretKey) {
    logger.error('Khalti secret key not configured');
    throw { statusCode: 500, message: 'Payment provider not configured' };
  }
  
  const isTestMode = process.env.NODE_ENV !== 'production';
  const khaltiUrl = isTestMode 
    ? 'https://a.khalti.com/api/v2/epayment/initiate/'
    : 'https://khalti.com/api/v2/epayment/initiate/';

  const payload = {
    return_url: 'https://educatenepal.org/donation/success',
    website_url: 'https://educatenepal.org',
    amount: donation.amount * 100, // Convert to paisa
    purchase_order_id: donation.id,
    purchase_order_name: `Donation-${donation.id}`,
    customer_info: {
      name: donation.donorName,
      email: donation.donorEmail,
    },
  };

  try {
    const response = await axios.post<KhaltiPaymentInitiateResponse>(
      khaltiUrl,
      payload,
      {
        headers: {
          'Authorization': `Key ${khaltiSecretKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 seconds timeout
      }
    );
    
    if (response.status !== 200) {
      throw new Error(`Khalti API returned status ${response.status}`);
    }
    
    // Map Khalti response to our internal response type
    return {
      paymentUrl: response.data.payment_url,
      pidx: response.data.pidx,
      message: response.data.message
    };
  } catch (error: unknown) {
    let errorMessage = 'Unknown error';
    let responseData;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (axios.isAxiosError(error)) {
      responseData = error.response?.data;
    }

    logger.error('Khalti payment initiation failed', { 
      error: errorMessage,
      donationId: donation.id,
      response: responseData
    });
    throw new Error('Failed to initiate Khalti payment');
  }

}

export const verifyKhaltiPayment = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return errorResponse('Request body is required', 400);
    }

    let verificationData;
    try {
      verificationData = JSON.parse(event.body);
    } catch (error) {
      return errorResponse('Invalid JSON in request body', 400);
    }
    
    const validation = khaltiVerificationSchema.safeParse(verificationData);
    if (!validation.success) {
      return errorResponse('Invalid verification data', 400, { errors: validation.error.issues });
    }

    const { token, amount, donationId } = validation.data;
    const khaltiSecretKey = process.env.KHALTI_SECRET_KEY;

    // Verify payment with Khalti
    const response = await axios.post(
      'https://khalti.com/api/v2/payment/verify/',
      { token, amount },
      {
        headers: {
          Authorization: `Key ${khaltiSecretKey}`,
        },
      }
    );

    // Update donation status in DynamoDB
    const updateParams: PutCommandInput = {
      TableName: process.env.DONATIONS_TABLE || '',
      Item: {
        id: donationId,
        status: 'completed',
        paymentDetails: response.data,
        updatedAt: new Date().toISOString()
      } as Record<string, any>,
    };

    try {
      await docClient.send(new PutCommand(updateParams));
      logger.info('Donation status updated', { donationId });
    } catch (error) {
      logger.error('Error updating donation status', {
        error: error instanceof Error ? error.message : 'Unknown error',
        donationId,
        stack: error instanceof Error ? error.stack : undefined
      });
      throw { statusCode: 500, message: 'Failed to update donation status' };
    }

    return successResponse({
      message: 'Payment verified successfully',
      donationId,
      status: 'completed',
    });
  } catch (error) {
    logger.error('Error verifying payment', { error });
    return errorResponse('Payment verification failed', 400);
  }
};

// ...
export const listDonations = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { email } = event.queryStringParameters || {};
    
    let command;
    if (email) {
      // Query by email using GSI
      command = new QueryCommand({
        TableName: process.env.DONATIONS_TABLE,
        IndexName: 'DonorEmailIndex',
        KeyConditionExpression: 'donorEmail = :email',
        ExpressionAttributeValues: {
          ':email': email,
        },
      });
    } else {
      // Get all donations (paginated in production)
      command = new QueryCommand({
        TableName: process.env.DONATIONS_TABLE,
        IndexName: 'CreatedAtIndex',
        Limit: 20, // Pagination
        ScanIndexForward: false, // Most recent first
      });
    }

    const result = await docClient.send(command);
    
    // Sanitize response (remove sensitive data)
    const donations = (result.Items || []).map(({ paymentDetails, donorEmail, ...rest }) => ({
      ...rest,
      donorEmail: rest.anonymous ? undefined : donorEmail,
    }));

    return successResponse({
      donations,
      lastEvaluatedKey: result.LastEvaluatedKey,
    });
  } catch (error) {
    logger.error('Error listing donations', { error });
    return errorResponse('Failed to retrieve donations', 500);
  }
};
