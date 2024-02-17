import { useState } from "react";
import { io } from "socket.io-client";

import { UserList } from "./user-list/user-list";
import { MessageList } from "./message-list/message-list";

// const username = prompt("What is your username");

const socket = io("http://localhost:3000");

function App() {

  // socket.on("connect", () => {
  //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });

  const [users, setUSers] = useState([{username: "asaf", id: "1"}, {username: "oliv", id: "2"}, {username: "tofi", id: "3"}]);
  const [messages, setMessages] = useState([{content: "msg1", id: "1"}, {content: "msg2", id: "2"}, {content: "msg3", id: "3"}])
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Asaf</h1>
      <div className="flex w-full">
        <div>
          <MessageList messages={messages}/>
        </div>
        <div>
          <UserList users={users} />
        </div>
      </div>
    </>
  )
}

export default App
