import { FormEvent } from "react";
s
import { socket } from "../utils/socket";

export function CreateMessage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputVal = event.currentTarget.message.value;

    if (inputVal) {
      socket.send(inputVal);
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
      <button type="submit">Submit</button>
    </form>
  );
}
