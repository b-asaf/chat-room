import express from "express";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;
const app = express();

const expressServer = app.listen(PORT, () => {
  console.log(`[SERVER] chat-room app listening at ${PORT}`);
});

// users storage - in memory
type User = {
  name: string;
  room: string;
  id: string;
};
const users: Record<string, User> = {};

const io = new Server(expressServer, {
  cors: {
    origin: process.env.NODE_ENV
      ? false
      : ["http://localhost:5173", "http://127.0.0.1:5173"],
  },
});

io.on("connection", (socket) => {
  const id = socket.id.substring(0, 5);
  const connectionDate = Date.now();

  socket.on("join room", (data) => {
    const user = {
      name: data.username,
      room: data.room,
      id: id,
    };

    users[id] = user;

    // send a welcome message ONLY to the new user
    socket.emit("message", {
      content: `${user.name.toUpperCase()} welcome to ${user.room}!`,
      createAt: connectionDate,
      messageType: "service",
    });

    // send a notification to all OTHER users that are connected
    socket.broadcast.emit("message", {
      content: `user ${user.name.toUpperCase()} entered the room`,
      createAt: connectionDate,
      messageType: "service",
    });
  });

  // listening for a message
  socket.on("message", (message) => {
    io.emit("message", {
      content: message,
      createAt: Date.now(),
      messageType: "user",
    });
  });

  // listening to user disconnection
  socket.on("disconnect", () => {
    const user = users[id];
    delete users[id];

    if (user) {
      socket.broadcast.emit("message", {
        content: `${user.name.toUpperCase()} left the ${user.room} room`,
        createAt: Date.now(),
        messageType: "service",
      });
    }
  });
});
