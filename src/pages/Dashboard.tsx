import ContainerCard from "@/components/custom/ContainerCard";
import Landing from "@/components/pages/dashboard/Landing";
import useUserHooks from "@/hooks/useUserHooks";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useUserStore } from "@/state/zustand/userStrore";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const { setUsersList } = useUserStore();
  const { getUsers } = useUserHooks();
  const path = useLocation();
  const landing = path.pathname.split("/").length === 2;

  useEffect(() => {
    getUsers((response) => setUsersList(response));
  }, []);

  return (
    <DashboardLayout>
      <ContainerCard className="w-full h-full rounded-none rounded-tl-3xl  xl:min-w-[500px]">
        {landing ? <Landing /> : <Outlet />}
      </ContainerCard>
    </DashboardLayout>
  );
};

export default Dashboard;
