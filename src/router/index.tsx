import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CalculatorPage from "../pages/CalculatorPage";
import About from "../pages/About";
import ExchangeListPage from "../pages/ExchangeListPage";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <CalculatorPage /> },
      { path: "/about", element: <About /> },
      { path: "/exchange-list", element: <ExchangeListPage /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
