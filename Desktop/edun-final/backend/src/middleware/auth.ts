import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { verify } from 'jsonwebtoken';
import { errorResponse } from '../utils/response';
import logger from '../utils/logger';

interface TokenPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

export const withAuth = (handler: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>) => {
  return async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const authHeader = event.headers?.authorization || event.headers?.Authorization;
      
      if (!authHeader) {
        return errorResponse('No authorization token provided', 401);
      }

      const token = authHeader.replace('Bearer ', '');
      const secret = process.env.JWT_SECRET;
      
      if (!secret) {
        logger.error('JWT_SECRET is not configured');
        return errorResponse('Server configuration error', 500);
      }

      try {
        const decoded = verify(token, secret) as TokenPayload;
        // Add user info to the event object for use in the handler
        event.requestContext = event.requestContext || {} as any;
        event.requestContext.authorizer = {
          principalId: decoded.sub,
          claims: decoded
        };
        
        return handler(event);
      } catch (error) {
        logger.error('Invalid token', { error });
        return errorResponse('Invalid or expired token', 401);
      }
    } catch (error) {
      logger.error('Authentication error', { error });
      return errorResponse('Authentication failed', 500);
    }
  };
};

export const requireAdmin = (handler: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>) => {
  const authHandler = withAuth(async (event) => {
    const userGroups = event.requestContext?.authorizer?.claims?.['cognito:groups'] || [];
    
    if (!userGroups.includes('admin')) {
      return errorResponse('Admin access required', 403);
    }
    
    return handler(event);
  });
  
  return authHandler;
};
