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
  console.log(`[SERVER] user ${socket.id} is connected`);
  socket.on("message", (message) => {
    const createAt = Date.now();
    io.emit("message", { content: message, createAt });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
