import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserList from "../pages/userList/UserList";
import Login from "../pages/login/Login";
import RedirectToHome from "./RedirectToHome";
import PrivateRoutes from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes><App /></PrivateRoutes>,
    children: [
      {
        path: "/", // Default route
        element: <Dashboard />,
      },
      {
        path: "/userList", // User list page
        element: <UserList />,
      },
    ],
  },
  {
    path: "/login", // Login page route
    element: (
      <RedirectToHome>
        <Login />
      </RedirectToHome>
    ),
  },
]);
