import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/index";
import Login from "../pages/login";
import UserManager from "../pages/admin/userManager/userManager";
import Register from "../pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
    children: [
      {
        index: true,
        path: '/userManager',
        element: <UserManager></UserManager>
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