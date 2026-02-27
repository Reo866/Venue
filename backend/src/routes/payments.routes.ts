import { Router } from 'express';
import { completePayment, createIntent } from '../controllers/payments.controller.js';

const router = Router();
router.post('/intent', createIntent);
router.post('/complete', completePayment);
export default router;
