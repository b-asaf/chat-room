import { useState } from "react";

import { MessageList } from "./message-list/message-list";
import { CreateMessage } from "./create-message/create-message";
import { socket } from "./utils/socket";

export type Message = {
  content: string;
  createAt: number;
  messageType: "service" | "user";
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  socket.on("message", (data: Message) => {
    const updateMessageList = [...messages, data];
    setMessages(updateMessageList);
  });

  return (
    <div>
      <CreateMessage />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
