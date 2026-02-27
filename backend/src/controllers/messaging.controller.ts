import { Request, Response } from 'express';

export const getConversations = (_req: Request, res: Response): void => {
  res.json([{ id: 't1', members: ['u1', 'u2'], sonMesaj: 'Bu akşam görüşelim mi?' }]);
};

export const sendMessage = (req: Request, res: Response): void => {
  res.status(201).json({
    message: 'Mesaj gönderildi',
    conversationId: req.params.id,
    payload: req.body
  });
};
