import { create } from "zustand";

type UserNameStore = {
  userName: string;
  onEnterRoom: (name: string) => void;
  onLeaveRoom: () => void;
};

export const useUserName = create<UserNameStore>((set) => ({
  userName: "",
  onEnterRoom: (name: string) => set({ userName: name }),
  onLeaveRoom: () => set({ userName: "" }),
}));
