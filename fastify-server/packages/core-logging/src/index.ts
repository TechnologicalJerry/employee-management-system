import pino, { LoggerOptions } from 'pino';

export function createLogger(options: LoggerOptions = {}) {
  const baseOptions: LoggerOptions = {
    level: process.env.LOG_LEVEL || 'info',
    ...options,
    base: {
      service: process.env.SERVICE_NAME || 'unknown-service',
      ...options.base,
    },
  };

  return pino(baseOptions);
}

export type Logger = ReturnType<typeof createLogger>;

