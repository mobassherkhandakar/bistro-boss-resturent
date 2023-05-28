import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footers from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderandFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderandFooter || <NavBar />}
      <Outlet />
      {noHeaderandFooter || <Footers />}
    </div>
  );
};

export default Main;
