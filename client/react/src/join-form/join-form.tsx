import { FormEvent } from "react";
import { socket } from "../utils/socket";

export function JoinForm() {
  const enterRoom = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = event.currentTarget.username.value;

    socket.emit("join room", { username });
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={enterRoom} className="flex w-full justify-center gap-x-2">
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
