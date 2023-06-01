import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCards from "../../../Hook/useCards";


const NavBar = () => {
  const [,card] = useCards()
  console.log(card);
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="manu">Our Manu</Link>
      </li>
      <li>
        <Link to="order/salad">Order Food</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>
          <button className="flex items-center justify-between gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{card?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut} className="capitalize">
              logOut
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar  fixed  z-30 max-w-screen-xl bg-black bg-opacity-50 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
