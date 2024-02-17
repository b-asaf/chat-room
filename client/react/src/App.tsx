import { useState } from "react";

import { CreateMessage } from "./create-message/create-message";
import { JoinForm } from "./join-form/join-form";
import { MessageList } from "./message-list/message-list";

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
    <div className="flex flex-col p-4 h-screen bg-slate-400">
      <JoinForm />
      <MessageList messages={messages} />
      {/* TBD */}
      {/* <UserList /> */}
      {/* <RoomList /> */}
      {/* <Activity /> */}
      <CreateMessage />
    </div>
  );
}

export default App;
