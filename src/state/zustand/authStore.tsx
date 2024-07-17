import { create } from "zustand";

interface IAuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<IAuthStore>()((set) => {
  const authenticated = localStorage.getItem("isAuthenticated") === "true";
  return {
    isAuthenticated: authenticated,
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  };
});
