import { Router } from 'express';
import { getExperiences, getVenues } from '../controllers/discover.controller.js';

const router = Router();
router.get('/venues', getVenues);
router.get('/experiences', getExperiences);
export default router;
