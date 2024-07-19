import { Button } from "@/components/ui/button";
import useAuthHooks from "@/hooks/useAuthHooks";

const Landing = () => {
  const { logout } = useAuthHooks();
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Landing;
