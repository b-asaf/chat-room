import { FormEvent } from "react";
import { socket } from "../utils/socket";

export function CreateMessage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputVal = event.currentTarget.message.value;

    if (inputVal) {
      socket.emit("message", inputVal);
      event.currentTarget.reset();
    }
  };

  return (
    <form className="flex justify-center mt-4 gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        id="message"
        name="message"
        className="focus:outline-none"
        placeholder="Enter message"
      />
      <button
        type="submit"
        className="rounded-md p-2 bg-blue-500 hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
