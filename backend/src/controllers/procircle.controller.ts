import { Request, Response } from 'express';

export const listMembers = (_req: Request, res: Response): void => {
  res.json([{ id: 'p1', userId: 'u1', membershipType: 'Gold', expiryDate: '2027-01-01' }]);
};

export const applyMembership = (req: Request, res: Response): void => {
  res.status(201).json({ message: 'Pro Circle başvurunuz alındı', ...req.body, status: 'pending' });
};
