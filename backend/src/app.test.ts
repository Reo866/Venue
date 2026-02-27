import request from 'supertest';
import { createApp } from './app.js';

describe('Venue API', () => {
  it('health endpoint çalışmalı', async () => {
    const response = await request(createApp()).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
