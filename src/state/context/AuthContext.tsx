import { ICommon } from "@/interface/ICommon";
import { createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: ICommon) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   const storedAuthState = localStorage.getItem("isAuthenticated") === "true";
  //   return storedAuthState ? storedAuthState : false;
  // });

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
