import { toast } from "@/components/ui/use-toast";
import { IUser } from "@/interface/IUser";
import { db } from "@/lib/firebase";
import { CONSTANTS } from "@/lib/static";
import { ref, set, push, onValue, query } from "firebase/database";
import { useState } from "react";

const useUserHooks = () => {
  const [isLoading, setIsLoading] = useState(false); // loading state
  const dateToday = new Date();

  const getUsers = (callback: (response: IUser[]) => void) => {
    const dbRef = ref(db, CONSTANTS.ENDPOINTS.USERS); // setting database reference
    const dbQuery = query(dbRef);
    console.log("test");

    setIsLoading(true); // initialize loading

    onValue(dbQuery, (snapshot) => {
      if (!snapshot?.val() && callback) {
        return callback([]);
      }
      const data: IUser[] = Object.values(snapshot.val()); // query result data
      console.log(snapshot);

      setIsLoading(false); // done loading

      // run success callback
      if (callback) callback(data);
    });
  };

  return { getUsers, isLoading };
};

export default useUserHooks;
