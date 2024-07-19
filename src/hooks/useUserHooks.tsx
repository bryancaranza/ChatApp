import { IUser } from "@/interface/IUser";
import { db } from "@/lib/firebase";
import { CONSTANTS } from "@/lib/static";
import { useUserStore } from "@/state/zustand/userStrore";
import { ref, onValue, query } from "firebase/database";
import { useState } from "react";

const useUserHooks = () => {
  const [isLoading, setIsLoading] = useState(false); // loading state
  const { setSearchUserList, usersList } = useUserStore();
  const ls = localStorage.getItem("user");

  const getUsers = (
    callback: (response: IUser[]) => void,
    isAuth?: boolean
  ) => {
    const dbRef = ref(db, CONSTANTS.ENDPOINTS.USERS); // setting database reference
    const dbQuery = query(dbRef);

    setIsLoading(true); // initialize loading

    onValue(dbQuery, (snapshot) => {
      if (!snapshot?.val() && callback) {
        return callback([]);
      }
      const data: IUser[] = Object.values(snapshot.val()); // query result data
      const filter: IUser[] = data.map((user) => {
        const { password, ...rest } = user;

        return rest;
      });
      setIsLoading(false); // done loading

      // run success callback
      if (callback) callback(isAuth ? data : filter);
    });
  };

  const searchUser = (search: string) => {
    const user: IUser = JSON.parse(ls!);
    console.log(user);

    const filter = usersList.filter(
      (users) =>
        (users.username.toLowerCase().includes(search.toLowerCase()) ||
          (users.firstname + " " + users.lastname)
            .toLowerCase()
            .includes(search.toLowerCase())) &&
        users.username !== user.username
    );

    console.log({ filter, usersList });

    setSearchUserList(!search.length ? [] : filter);
  };

  return { getUsers, searchUser, isLoading };
};

export default useUserHooks;
