import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 4000),
  jwtSecret: process.env.JWT_SECRET ?? 'venue-secret',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? 'venue-refresh-secret',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? 'sk_test_dummy'
};
