import { format } from "date-fns";
import { Message } from "../App";

type MessageListProp = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProp) {
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
