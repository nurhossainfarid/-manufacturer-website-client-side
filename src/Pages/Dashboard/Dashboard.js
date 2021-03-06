import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../CustomHooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet/>
            </div>
            <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        </>
                    }
                    {
                        !admin && <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add A Review</Link></li>
                        </>
                    }

                        {/* {admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/doctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                        </>
                        } */}
                    </ul>
                
                </div>
        </div>
    );
};

export default Dashboard;