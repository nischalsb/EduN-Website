import { APIGatewayProxyResult } from 'aws-lambda';

export const successResponse = (
  data: Record<string, any>,
  statusCode = 200
): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    success: true,
    ...data,
  }),
});

export const errorResponse = (
  message: string,
  statusCode = 500,
  data: Record<string, any> = {}
): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({
    success: false,
    error: message,
    ...data,
  }),
});

// Middleware for handling errors in async handlers
export const asyncHandler = (handler: Function) => {
  return async (event: any, context: any) => {
    try {
      return await handler(event, context);
    } catch (error) {
      console.error('Handler Error:', error);
      if (error instanceof Error) {
        return errorResponse(
          error.message || 'Internal server error',
          (error as any).statusCode || 500
        );
      }
      return errorResponse('An unexpected error occurred', 500);
    }
  };
};
