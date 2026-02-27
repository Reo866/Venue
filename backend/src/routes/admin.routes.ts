import { Router } from 'express';
import { authenticate, requireRole } from '../middleware/auth.js';

const router = Router();

router.use(authenticate, requireRole(['admin']));

router.get('/metrics', (_req, res) => {
  res.json({
    toplamKullanici: 10234,
    aktifEtkinlik: 268,
    revenue: 4200000,
    algoritmaAgirliklari: { Relax: 0.25, Party: 0.35, Network: 0.2, Explore: 0.2 }
  });
});

export default router;
