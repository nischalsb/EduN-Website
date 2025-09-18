export interface Logger {
  info: (message: string, data?: Record<string, unknown>) => void;
  error: (message: string, data?: Record<string, unknown>) => void;
  warn: (message: string, data?: Record<string, unknown>) => void;
}

const logger: Logger = {
  info: (message: string, data: Record<string, unknown> = {}) => 
    console.log(JSON.stringify({ level: 'INFO', message, ...data })),
  
  error: (message: string, data: Record<string, unknown> = {}) => 
    console.error(JSON.stringify({ level: 'ERROR', message, ...data })),
  
  warn: (message: string, data: Record<string, unknown> = {}) => 
    console.warn(JSON.stringify({ level: 'WARN', message, ...data })),
};

export default logger;
