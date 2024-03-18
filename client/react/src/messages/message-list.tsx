import { useState } from "react";

import { Message } from "./message";
import type { MessageType } from "./types";
import { socket } from "../utils/socket";

export function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  socket.on("message", (data: MessageType) => {
    const updateMessageList = [...messages, data];
    setMessages(updateMessageList);
  });

  return (
    <div className="flex flex-col h-screen overflow-auto">
      <div className="flex-grow bg-slate-200 w-full rounded-xl justify-start mx-auto">
        {messages.map((message) => (
          <Message key={message.createAt} message={message} />
        ))}
      </div>
    </div>
  );
}
