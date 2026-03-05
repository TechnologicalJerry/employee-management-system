import { FastifyInstance } from 'fastify';

import { createFastifyApp } from '@employee-ms/core-http/src/createFastifyApp';

export async function buildApp(): Promise<FastifyInstance> {
  const app = createFastifyApp({ logger: true });

  app.get('/api/v1', async () => {
    return { service: 'api-gateway', status: 'ok' };
  });

  return app;
}

