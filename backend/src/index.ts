import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { createApp } from './app.js';
import { env } from './config/env.js';
import { setupChatSocket } from './sockets/chat.socket.js';

const app = createApp();
const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
setupChatSocket(io);

server.listen(env.port, () => {
  console.log(`Venue backend ${env.port} portunda çalışıyor`);
});
