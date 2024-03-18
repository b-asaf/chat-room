import { format } from "date-fns";

import type { MessageType } from "./types";
import { useUserName } from "../hooks/use-user-name";

const ADMIN = "Admin";

type MessageProps = {
  message: MessageType;
};

export function Message({ message }: MessageProps) {
  const { userName } = useUserName();

  let postLocation = "";
  let headerBgStyle = "";
  if (message.username !== ADMIN) {
    if (message.username === userName) {
      postLocation = "self-start w-[60%]";
      headerBgStyle = "bg-blue-600";
    } else {
      postLocation = "self-end w-[60%]";
      headerBgStyle = "bg-purple-600";
    }
  }

  return (
    <div
      className={`border rounded-md m-4 bg-slate-300 overflow-hidden flex-shrink ${postLocation}`}
    >
      {message.username !== ADMIN && (
        <div
          className={`flex justify-between p-1 rounded-top-md ${headerBgStyle}`}
        >
          <p className="justify-center items-center capitalize font-semibold">
            {message.username}
          </p>
          <p className="justify-center items-center text-s">
            {format(message.createAt, "H:mm:ss")}
          </p>
        </div>
      )}
      <div className="mt-1 px-1 py-2">{message.content}</div>
    </div>
  );
}
