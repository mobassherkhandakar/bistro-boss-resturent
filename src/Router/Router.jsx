import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Manu from "../pages/Manu/Manu/Manu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Regester/Regester";
import Dashboard from "../layout/Dashboard";
import MyCard from "../pages/Dashboard/MyCard/MyCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "manu",
        element: <Manu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>, 
    children: [
      {
        path: 'mycart', 
        element: <MyCard></MyCard>
      }
    ]
  }
]);
export default router;
