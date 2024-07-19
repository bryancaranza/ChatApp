import { IUser } from "@/interface/IUser";
import { create } from "zustand";

interface IUserStore {
  usersList: IUser[];
  searchUserList: IUser[];
  setSearchUserList: (searchUserList: IUser[]) => void;
  setUsersList: (usersList: IUser[]) => void;
}

export const useUserStore = create<IUserStore>()((set) => {
  return {
    usersList: [],
    setUsersList: (usersList: IUser[]) => set({ usersList }),
    searchUserList: [],
    setSearchUserList: (searchUserList: IUser[]) => set({ searchUserList }),
  };
});
