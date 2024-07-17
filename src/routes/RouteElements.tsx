import ProtectedRoute from "@/components/custom/ProtectedRoute";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import PublicRoute from "@/components/custom/PublicRoute";

const Home = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Home")), 1500);
  });
});

const Dashboard = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Dashboard")), 1500);
  });
});

const Login = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Login")), 1500);
  });
});

const Register = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Register")), 1500);
  });
});

const RouteElements = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.ROOT} element={<PublicRoute component={Home} />} />
      <Route path={ROUTES.LOGIN} element={<PublicRoute component={Login} />} />
      <Route
        path={ROUTES.REGISTER}
        element={<PublicRoute component={Register} />}
      />

      {/* Private Routes */}
      <Route
        path={ROUTES.DASHBOARD}
        element={<ProtectedRoute component={Dashboard} />}
      />
    </Routes>
  );
};

export default RouteElements;
