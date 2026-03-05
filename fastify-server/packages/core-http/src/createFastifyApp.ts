import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';

export interface CreateAppOptions {
  logger?: boolean;
}

export function createFastifyApp(options: CreateAppOptions = {}): FastifyInstance {
  const app = fastify({
    logger: options.logger ?? true,
  });

  void app.register(cors, {
    origin: true,
    credentials: true,
  });

  void app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });

  app.get('/health', async () => {
    return { status: 'ok' };
  });

  return app;
}

