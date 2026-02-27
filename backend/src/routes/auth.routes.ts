import { Router } from 'express';
import { login, logout, signup, uploadPhoto, verifyPhone } from '../controllers/auth.controller.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify-phone', verifyPhone);
router.post('/upload-photo', uploadPhoto);

export default router;
