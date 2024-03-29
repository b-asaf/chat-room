import { FormEvent } from "react";
import { socket } from "../utils/socket";
import { useUserName } from "../hooks/use-user-name";

export function JoinForm() {
  const { onEnterRoom } = useUserName();

  const enterRoom = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = event.currentTarget.username.value;

    socket.emit("join room", { username });
    onEnterRoom(username);
  };

  return (
    <form
      onSubmit={enterRoom}
      className="flex w-full justify-center m-auto gap-1 mb-4"
    >
      <input
        type="text"
        id="username"
        name="username"
        maxLength={8}
        placeholder="Your name"
        required
        className="max-w-[60%] gap-2 rounded-md w-1/4 px-1 focus:outline-none"
      />
      <button
        id="join"
        type="submit"
        className="rounded-md p-2 bg-blue-500 hover:bg-blue-600 transition-colors"
      >
        Join
      </button>
    </form>
  );
}
