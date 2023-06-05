import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Manu from "../pages/Manu/Manu/Manu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Regester/Regester";
import Dashboard from "../layout/Dashboard";
import MyCard from "../pages/Dashboard/MyCard/MyCard";
import PrivateRout from "./PrivateRout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Additems from "../pages/Dashboard/AddItems/Additems";
import AddminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";

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
    element: <PrivateRout><Dashboard></Dashboard></PrivateRout>, 
    children: [
      {
        path: 'mycart', 
        element: <MyCard></MyCard>
      },
      {
        path: 'allusers',
        element: <AllUsers/>
      },
      {
        path: 'addItems',
        element: <AddminRoute><Additems/></AddminRoute>
      },
      {
        path: 'manageItem',
        element: <ManageItem/>
      }
    ]
  }
]);
export default router;
