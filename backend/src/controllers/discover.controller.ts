import { Request, Response } from 'express';

export const getVenues = (req: Request, res: Response): void => {
  const { lat, lng } = req.query;
  res.json({
    message: 'Yakındaki mekanlar listelendi',
    query: { lat, lng },
    venues: [
      { id: 'v1', name: 'Lefkoşa Avlu', category: 'Kafe', rating: 4.7 },
      { id: 'v2', name: 'Girne Sahil Lounge', category: 'Bar', rating: 4.5 }
    ]
  });
};

export const getExperiences = (req: Request, res: Response): void => {
  const { lat, lng, mood } = req.query;
  res.json({
    message: 'Yakındaki deneyimler listelendi',
    query: { lat, lng, mood },
    experiences: [{ id: 'e1', title: 'Gün Batımı Tekne Turu', mood, price: 1200 }]
  });
};
