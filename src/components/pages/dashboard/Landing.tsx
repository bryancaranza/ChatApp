import Icon from "@/components/custom/Icon";
import { Button } from "@/components/ui/button";
import useAuthHooks from "@/hooks/useAuthHooks";
import { useAuthStore } from "@/state/zustand/authStore";
import React from "react";

const Landing = () => {
  const { logout } = useAuthHooks();
  const { user } = useAuthStore();

  console.log(user);

  return (
    <React.Fragment>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <Icon className="!w-32 !h-32 !bg-[#0B101B] !text-2xl">{`${user?.firstname} ${user?.lastname}`}</Icon>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl capitalize">{`${user?.firstname} ${user?.lastname}`}</p>
            <p className="text-gray-500">{user?.username}</p>
          </div>
        </div>
        <Button onClick={logout} className="text-red-600">
          Logout
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Landing;
