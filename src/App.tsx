import { Suspense } from "react";
import { AuthProvider } from "./state/context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/custom/Loader";
import RouteElements from "./routes/RouteElements";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <MainLayout>
          <BrowserRouter>
            <RouteElements />
          </BrowserRouter>
        </MainLayout>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
