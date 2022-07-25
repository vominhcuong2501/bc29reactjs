import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import BaiTapQuanLyNguoidung from "./Components/BaiTapQuanLyNguoidung/BaiTapQuanLyNguoidung";
import RegisterForm from "./Components/BaiTapQuanLyNguoidung/RegisterForm";
import UserManagement from "./Components/BaiTapQuanLyNguoidung/UserManagement";
import BaiTapThuDo from "./Components/Redux/BaiTapThuDo/BaiTapThuDo";
import AdminLayout from "./Layouts/AdminLayout";
import HomeLayout from "./Layouts/HomeLayout";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Hooks from "./Pages/Hooks/Hooks";
import Login from "./Pages/Login/Login";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/hooks",
          element: <Hooks />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Navigate to="/admin/user-management" />,
        },
        {
          path: "/admin/user-management",
          // element: <UserManagement />,
          element: <BaiTapQuanLyNguoidung />
        },
        {
          path: "/admin/clothes-management",
          element: <BaiTapThuDo />,
        },
      ],
    },
  ]);

  return routing;
}
