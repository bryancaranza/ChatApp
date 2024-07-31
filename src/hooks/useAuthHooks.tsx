import { toast } from "@/components/ui/use-toast";
import { ILogin, IRegister } from "@/interface/IAuth";
import { IUser } from "@/interface/IUser";
import { db } from "@/lib/firebase";
import { CONSTANTS } from "@/lib/static";
import { ref, set, push } from "firebase/database";
import { useState } from "react";
import useUserHooks from "./useUserHooks";
import { useAuthStore } from "@/state/zustand/authStore";
import moment from "moment";

const useAuthHooks = () => {
  const [isLoading, setIsLoading] = useState(false); // loading state
  const {
    setIsAuthenticated,
    login: loginStore,
    logout: logoutStore,
  } = useAuthStore();
  const { getUsers } = useUserHooks();

  const today = moment().format();

  const register = async (
    data: IRegister,
    callback?: {
      onSuccess?: () => void;
      onError?: (key: any, error: any) => void;
    }
  ) => {
    const newDocRef = push(ref(db, CONSTANTS.ENDPOINTS.USERS)); // creating unique id
    const id = `user-${newDocRef.key}`; // unique id

    try {
      const payload = {
        ...data,
        id,
        date_created: today,
      };
      await set(newDocRef, payload);

      setIsLoading(false); // done loading
      // run success callback
      if (callback?.onSuccess) callback.onSuccess();
      toast({
        title: "Register",
        description: "You are successfully registered.",
      });
    } catch (error) {
      setIsLoading(false); // done loading

      // run error callback
      if (callback?.onError) callback.onError("test", {});
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Please try again.",
      });
    }
  };

  const login = (data: ILogin) => {
    getUsers((response: IUser[]) => {
      const matched: IUser = response.filter(
        (user) =>
          user.username === data.username && user.password === data.password
      )?.[0];

      if (!matched) {
        logoutStore();
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please check your username/password.",
        });
      } else {
        const { password, ...rest } = matched;

        loginStore(rest);
      }
    }, true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return { login, logout, register, isLoading };
};

export default useAuthHooks;
