import { randomUUID } from 'node:crypto';
import { Request, Response } from 'express';
import { z } from 'zod';
import { createTokens } from '../services/token.service.js';
import { sanitizeInput } from '../utils/sanitize.js';

const signupSchema = z.object({
  isim: z.string().min(2),
  email: z.string().email(),
  telefon: z.string().min(8),
  sifre: z.string().min(6),
  rol: z.enum(['visitor', 'local'])
});

export const signup = (req: Request, res: Response): void => {
  const parsed = signupSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Geçersiz kayıt bilgileri', errors: parsed.error.flatten() });
    return;
  }
  const tokens = createTokens({ id: randomUUID(), rol: parsed.data.rol });
  res.status(201).json({
    message: 'Kayıt başarılı',
    user: { ...parsed.data, isim: sanitizeInput(parsed.data.isim) },
    ...tokens
  });
};

export const login = (req: Request, res: Response): void => {
  const { email } = req.body as { email: string };
  const tokens = createTokens({ id: 'demo-user', rol: 'local' });
  res.json({ message: `${sanitizeInput(email)} ile giriş başarılı`, ...tokens });
};

export const logout = (_req: Request, res: Response): void => {
  res.json({ message: 'Çıkış yapıldı' });
};

export const verifyPhone = (req: Request, res: Response): void => {
  const { telefon, kod } = req.body as { telefon: string; kod: string };
  res.json({ message: `${telefon} numarası doğrulandı`, kod });
};

export const uploadPhoto = (_req: Request, res: Response): void => {
  res.json({ message: 'Fotoğraf doğrulaması alındı', verifiedLevel: 'photo' });
};
