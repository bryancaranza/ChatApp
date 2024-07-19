import { IUser } from "@/interface/IUser";
import { create } from "zustand";

interface IAuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
  login: (user: IUser) => void;
  logout: () => void;
}

// const authenticated = localStorage.getItem("isAuthenticated") === "true";

export const useAuthStore = create<IAuthStore>()((set) => {
  const authenticated = localStorage.getItem("isAuthenticated") === "true";
  const user = localStorage.getItem("user");

  return {
    isAuthenticated: authenticated,
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    user: JSON.parse(user!),
    setUser: (user: IUser | undefined) => set({ user }),
    login: (user: IUser) => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user));
      set({ isAuthenticated: true, user });
    },
    logout: () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      set({ isAuthenticated: false, user: undefined });
    },
  };
});

// export const useAuthStore = create<IAuthStore>()(
//   persist(
//     (set) => ({
//       isAuthenticated: authenticated,
//       setIsAuthenticated: (isAuthenticated: boolean) =>
//         set({ isAuthenticated }),
//       user: undefined,
//       setUser: (user: IUser) => set({ user }),
//     }),
//     {
//       name: "usersdsss",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );
