import { format } from "date-fns";
import { Message } from "../App";
import { socket } from "../utils/socket";
import { useState } from "react";

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  socket.on("message", (data: Message) => {
    const updateMessageList = [...messages, data];
    setMessages(updateMessageList);
  });

  return (
    <div>
      {messages.map((message) => (
        <li key={message.createAt}>
          {format(message.createAt, "H:mm:ss")} - {message.content}
        </li>
      ))}
    </div>
  );
}
