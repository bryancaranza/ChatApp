import { ICommon } from "@/interface/ICommon";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: ICommon) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated") === "true";
    return storedAuthState ? storedAuthState : false;
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
