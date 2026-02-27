import { Router } from 'express';
import { createEvent, getEventById, listEvents } from '../controllers/events.controller.js';

const router = Router();
router.get('/', listEvents);
router.post('/', createEvent);
router.get('/:id', getEventById);
export default router;
