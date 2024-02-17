import express from 'express';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

const io = new Server({
  cors: {
    origin: "http://localhost:5173/"
    // origin: "*"
    // methods: ["GET", "POST"],
    // credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connect', (socket) => {
  console.log('a user connected');
  
  // disconnect, remove user from users list
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // broadcast messages to all users
  socket.on('chat message', (message: string) => {
    console.log(`message::${message}`);
    io.emit('chat message', message);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
