import { Button } from "@/components/ui/button";
import useAuthHooks from "@/hooks/useAuthHooks";
import { ROUTES } from "@/routes/routes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuthHooks();
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full">
      <p>Dashboard</p>

      <Button onClick={logout}>Logout</Button>
      <div className="flex gap-2">
        <Button asChild>
          <Link to={ROUTES.LOGIN}>Go to Login</Link>
        </Button>
        <Button asChild>
          <Link to={ROUTES.ROOT}>Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
