import { Router } from 'express';
import { applyMembership, listMembers } from '../controllers/procircle.controller.js';

const router = Router();
router.get('/members', listMembers);
router.post('/apply', applyMembership);
export default router;
