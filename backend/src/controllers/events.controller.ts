import { Request, Response } from 'express';

const events = [{ id: '1', title: 'Canlı Müzik Gecesi', category: 'Party', price: 800 }];

export const listEvents = (_req: Request, res: Response): void => {
  res.json(events);
};

export const createEvent = (req: Request, res: Response): void => {
  const event = { id: String(events.length + 1), ...req.body };
  events.push(event);
  res.status(201).json(event);
};

export const getEventById = (req: Request, res: Response): void => {
  const event = events.find((item) => item.id === req.params.id);
  if (!event) {
    res.status(404).json({ message: 'Etkinlik bulunamadı' });
    return;
  }
  res.json(event);
};
