import { Router } from 'express';
import { getConversations, sendMessage } from '../controllers/messaging.controller.js';

const router = Router();
router.get('/conversations', getConversations);
router.post('/conversations/:id/messages', sendMessage);
export default router;
