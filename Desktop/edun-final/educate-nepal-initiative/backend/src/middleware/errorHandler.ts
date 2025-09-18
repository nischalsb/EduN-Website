import { APIGatewayProxyResult } from 'aws-lambda';
import { errorResponse } from '../utils/response';
import logger from '../utils/logger';

interface AppError extends Error {
  statusCode?: number;
  code?: string;
  details?: any;
}

export const errorHandler = (handler: (event: any) => Promise<APIGatewayProxyResult>) => {
  return async (event: any): Promise<APIGatewayProxyResult> => {
    try {
      return await handler(event);
    } catch (error) {
      const err = error as AppError;
      
      // Log the full error for debugging
      logger.error('Unhandled error', { 
        error: err.message, 
        stack: err.stack,
        details: err.details,
        event: JSON.stringify(event, null, 2)
      });

      // Handle specific error types
      if (err.name === 'ValidationError') {
        return errorResponse('Validation error', 400, { errors: err.details });
      }

      if (err.code === 'ConditionalCheckFailedException') {
        return errorResponse('Resource conflict', 409);
      }

      // Default error response
      return errorResponse(
        process.env.NODE_ENV === 'production' 
          ? 'Internal server error' 
          : err.message,
        500,
        process.env.NODE_ENV !== 'production' ? { stack: err.stack } : undefined
      );
    }
  };
};
