import express from "express";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;
const app = express();

const expressServer = app.listen(PORT, () => {
  console.log(`[SERVER] chat-room app listening at ${PORT}`);
});

const io = new Server(expressServer, {
  cors: {
    origin: process.env.NODE_ENV
      ? false
      : ["http://localhost:5173", "http://127.0.0.1:5173"],
  },
});

io.on("connection", (socket) => {
  const username = socket.id.substring(0, 5);
  console.log(`[SERVER] user ${username} is connected`);
  const connectionDate = Date.now();

  // send a welcome message ONLY to the new user
  socket.emit("message", {
    content: "Welcome to the chat-room!",
    createAt: connectionDate,
    messageType: "service",
  });

  // send a notification to all OTHER users that are connected
  socket.broadcast.emit("message", {
    content: `user ${username} is now connected`,
    createAt: connectionDate,
    messageType: "service",
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
    socket.broadcast.emit("message", {
      content: `user ${username} disconnected`,
      createAt: Date.now(),
      messageType: "service",
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
