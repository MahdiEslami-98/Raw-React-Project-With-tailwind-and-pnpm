import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/mainLayout";
import HomePage from "@/pages/Home";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
