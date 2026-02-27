import { Request, Response } from 'express';

export const createIntent = (req: Request, res: Response): void => {
  const { amount } = req.body;
  res.status(201).json({ clientSecret: 'pi_mock_secret', amount, currency: 'try' });
};

export const completePayment = (req: Request, res: Response): void => {
  res.json({ message: 'Ödeme tamamlandı', status: 'succeeded', detail: req.body });
};
