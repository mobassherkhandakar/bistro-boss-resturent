import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Manu from "../pages/Manu/Manu/Manu";
import Order from "../pages/Order/Order/Order";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'manu',
        element: <Manu/>
      },
      {
        path: 'order/:category',
        element: <Order/>
      }
    ]

  }
])
export default router