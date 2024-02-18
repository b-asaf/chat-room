import { useEffect, useState } from "react";
import { socket } from "../utils/socket";

type User = {
  name: string;
  room: string;
  id: string;
};

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("user list", (data) => {
      const updateUsersArray = Object.values(data.users) as User[];
      setUsers(updateUsersArray);
    });
  });

  const visibleUsers = users.map((user) => user.name).join(", ");

  return (
    <div className="flex flex-col w-full min-h-10 px-3 py-1 bg-slate-400 rounded-md">
      <h3>Users List</h3>
      {users.length === 0 ? (
        <p>The chat-room is empty!</p>
      ) : (
        <p className="capitalize text-sm">{visibleUsers}</p>
      )}
    </div>
  );
}
