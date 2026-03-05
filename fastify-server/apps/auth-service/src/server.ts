import { loadEnv } from '@employee-ms/core-config';
import { createLogger } from '@employee-ms/core-logging';

import { buildApp } from './app';

async function start() {
  const env = loadEnv(process.env, {
    SERVICE_NAME: 'auth-service',
  });

  const logger = createLogger();

  try {
    const app = await buildApp();
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
    logger.info({ port: env.PORT }, 'Auth service started');
  } catch (err) {
    logger.error({ err }, 'Failed to start auth service');
    process.exit(1);
  }
}

void start();

