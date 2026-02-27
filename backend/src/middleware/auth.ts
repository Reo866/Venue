import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export interface AuthRequest extends Request {
  user?: { id: string; rol: string };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Yetkisiz erişim' });
    return;
  }
  try {
    req.user = jwt.verify(token, env.jwtSecret) as { id: string; rol: string };
    next();
  } catch {
    res.status(401).json({ message: 'Geçersiz token' });
  }
};

export const requireRole = (roles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.rol)) {
      res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
      return;
    }
    next();
  };
