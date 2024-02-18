import { useState } from "react";

import { Message } from "./message";
import { MessageType } from "../App";
import { socket } from "../utils/socket";

export function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  socket.on("message", (data: MessageType) => {
    const updateMessageList = [...messages, data];
    setMessages(updateMessageList);
  });

  return (
    <div className="flex flex-col bg-slate-200 w-full rounded-xl flex-grow overflow-auto justify-start mx-auto my-4">
      {messages.map((message) => (
        <Message key={message.createAt} message={message} />
      ))}
    </div>
  );
}
