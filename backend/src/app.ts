import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import adminRoutes from './routes/admin.routes.js';
import authRoutes from './routes/auth.routes.js';
import discoverRoutes from './routes/discover.routes.js';
import eventsRoutes from './routes/events.routes.js';
import messagingRoutes from './routes/messaging.routes.js';
import paymentsRoutes from './routes/payments.routes.js';
import procircleRoutes from './routes/procircle.routes.js';
import { apiLimiter } from './middleware/rateLimit.js';

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(apiLimiter);

  app.get('/health', (_req, res) => res.json({ status: 'ok', servis: 'Venue API' }));

  app.use('/auth', authRoutes);
  app.use('/admin', adminRoutes);
  app.use('/discover', discoverRoutes);
  app.use('/events', eventsRoutes);
  app.use('/', messagingRoutes);
  app.use('/procircle', procircleRoutes);
  app.use('/payments', paymentsRoutes);

  return app;
};
