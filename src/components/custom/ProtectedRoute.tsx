import { Navigate } from "react-router-dom";
import { IProtectedRoute } from "@/interface/IAuth";
import { useAuthStore } from "@/state/zustand/authStore";

const ProtectedRoute = ({ component: Component }: IProtectedRoute) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
