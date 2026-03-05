import { FastifyInstance } from 'fastify';

import { createFastifyApp } from '@employee-ms/core-http/src/createFastifyApp';

export async function buildApp(): Promise<FastifyInstance> {
  const app = createFastifyApp({ logger: true });

  app.get('/auth/health', async () => {
    return { service: 'auth-service', status: 'ok' };
  });

  // Placeholder route for login (to be implemented further)
  app.post('/auth/login', async () => {
    return { message: 'login not implemented yet' };
  });

  return app;
}

