import About from "../pages/About";
import NavBar from "../pages/common/NavBar";
import { Navigate, useRoutes } from "react-router-dom";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/app/home" replace />,
    },
    {
      path: "/app",
      element: <Navigate to="/app/home" replace />,
    },
    {
      path: "/app",
      element: <NavBar />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    //   { path: "/", element: <Navigate to="/app" replace /> },
    //   { path: "*", element: <Navigate to="/404" replace /> },
    //   { path: "/404", element: <Page404 /> },
  ]);
};
