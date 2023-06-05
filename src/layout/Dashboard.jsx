import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCards from "../Hook/useCards";
import useTitle from "../Hook/useTitele";
import useAdmin from "../Hook/useAdmin";




const Dashboard = () => {
    const [,card] = useCards()

    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    useTitle('Dashboard')
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-indigo-300 lg:px-10">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{card?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/manu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;