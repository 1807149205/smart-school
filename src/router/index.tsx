import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/index";
import Login from "../pages/login/login";
import UserManager from "../pages/admin/userManager";
import Register from "../pages/register/register";
import SysManager from "../pages/admin/sysManager";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
    children: [
      {
        path: '/userManager',
        element: <UserManager></UserManager>
      },
      {
        path: '/sysManager',
        element: <SysManager></SysManager>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);