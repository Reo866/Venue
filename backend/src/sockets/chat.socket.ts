import { Server } from 'socket.io';

export const setupChatSocket = (io: Server): void => {
  io.on('connection', (socket) => {
    socket.on('conversation:join', (threadId: string) => {
      socket.join(threadId);
    });

    socket.on('message:send', (payload) => {
      io.to(payload.threadId).emit('message:new', {
        ...payload,
        timestamp: new Date().toISOString()
      });
    });

    socket.on('activity:typing', (payload) => {
      socket.to(payload.threadId).emit('activity:typing', payload);
    });
  });
};
