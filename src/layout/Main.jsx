import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footers from '../pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footers/>
    </div>
  );
};

export default Main;