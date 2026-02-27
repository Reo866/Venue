import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const createTokens = (payload: { id: string; rol: string }) => {
  const accessToken = jwt.sign(payload, env.jwtSecret, { expiresIn: '15m' });
  const refreshToken = jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};
