import { CreateMessage } from "./create-message/create-message";
import { JoinForm } from "./join-form/join-form";
import { MessageList } from "./message-list/message-list";

export type Message = {
  username: string;
  content: string;
  createAt: number;
};

function App() {
  return (
    <div className="flex flex-col p-4 h-screen bg-slate-400">
      <JoinForm />
      <MessageList />
      {/* TBD */}
      {/* <UserList /> */}
      {/* <RoomList /> */}
      {/* <Activity /> */}
      <CreateMessage />
    </div>
  );
}

export default App;
