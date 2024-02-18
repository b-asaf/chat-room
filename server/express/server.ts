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
  id: string;
};

const ADMIN = "Admin";
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

  // Send message only to current user
  socket.emit("message", buildMessage(ADMIN, "Welcome to chat-room!"));

  // send a notification to all OTHER users that are connected
  const user = findUser(socket.id);
  if (user) {
    socket.broadcast.emit(
      "message",
      buildMessage(ADMIN, `${user.name.toUpperCase()} entered chat-room`)
    );
  }

  socket.on("join room", (data) => {
    const user = activateUser(socket.id, data.username);

    if (user) {
      // send a welcome message ONLY to the new user
      socket.emit(
        "message",
        buildMessage(ADMIN, `${user.name.toUpperCase()} welcome to chat-room!`)
      );

      // send a notification to all OTHER users that are connected
      socket.broadcast.emit(
        "message",
        buildMessage(ADMIN, `${user.name.toUpperCase()} entered chat-room`)
      );
    }
  });

  // listening for a message
  socket.on("message", (message) => {
    const user = findUser(socket.id);
    // send message only if there is a user
    if (user) {
      io.emit("message", buildMessage(user.name, message));
    } else {
      socket.emit(
        "message",
        buildMessage(ADMIN, "user must join chat-room to start chatting")
      );
    }
  });

  // listening to user disconnection
  socket.on("disconnect", () => {
    const user = users[id];
    delete users[id];

    if (user) {
      socket.broadcast.emit("message", {
        content: `${user.name.toUpperCase()} left chat-room!`,
        createAt: Date.now(),
        messageType: "service",
      });
    }
  });
});

function buildMessage(name: string, content: string) {
  return {
    username: name,
    content,
    createAt: Date.now(),
  };
}

// users
function activateUser(socketId: string, name: string) {
  const id = socketId.substring(0, 5);
  const user = { id, name };

  if (!users[id]) {
    users[id] = user;
  }

  return user;
}

function userLeavesApp(userId: string) {
  const user = users[userId];

  if (user) {
    delete users[userId];
  }
}

function findUser(socketId: string) {
  const userId = socketId.substring(0, 5);

  return users[userId];
}
