import { CreateMessage } from "./create-message/create-message";
import { JoinForm } from "./join-form/join-form";
import { MessageList } from "./messages/message-list";
import { UserList } from "./user-list/user-list";

export type MessageType = {
  username: string;
  content: string;
  createAt: number;
};

function App() {
  return (
    <div className="flex flex-col p-4 h-screen">
      <JoinForm />
      <MessageList />
      <UserList />
      <CreateMessage />
    </div>
  );
}

export default App;
