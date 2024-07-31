import ProtectedRoute from "@/components/custom/ProtectedRoute";
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import PublicRoute from "@/components/custom/PublicRoute";
import Search from "@/components/pages/dashboard/Search";
import Message from "@/components/pages/dashboard/Message";

// const Home = lazy(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => resolve(import("@/pages/Home")), 1500);
//   });
// });

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

const Test = lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("@/pages/Test")), 1500);
  });
});

const RouteElements = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.ROOT} element={<PublicRoute component={Login} />} />
      <Route path={ROUTES.LOGIN} element={<PublicRoute component={Login} />} />
      <Route path={ROUTES.TEST} element={<PublicRoute component={Test} />} />
      <Route
        path={ROUTES.REGISTER}
        element={<PublicRoute component={Register} />}
      />

      {/* Private Routes */}
      <Route
        path={ROUTES.DASHBOARD}
        element={<ProtectedRoute component={Dashboard} />}
      >
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.MESSAGE + "/:id"} element={<Message />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
    </Routes>
  );
};

export default RouteElements;
