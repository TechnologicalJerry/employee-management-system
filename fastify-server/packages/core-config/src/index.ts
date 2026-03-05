import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  SERVICE_NAME: z.string().min(1),
  PORT: z.coerce.number().int().positive().default(3000),
});

export type Env = z.infer<typeof envSchema>;

export function loadEnv(raw: NodeJS.ProcessEnv, overrides: Partial<Env> = {}): Env {
  const parsed = envSchema.safeParse({ ...raw, ...overrides });

  if (!parsed.success) {
    // In production apps, you'd use a proper logger; for bootstrapping we throw.
    throw new Error(`Invalid environment configuration: ${parsed.error.toString()}`);
  }

  return parsed.data;
}
