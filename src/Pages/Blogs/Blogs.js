import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet/>
            </div>
            <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/blogs">Q-1 : Improve the performance of a React Application</Link></li>
                        <li><Link to="/blogs/manageState">Q-2 : The different ways to manage a state in a React application</Link></li>
                        <li><Link to="/blogs/prototypicalInheritance">Q-3 : Prototypical Inheritance work</Link></li> 
                        <li><Link to="/blogs/notStateDirectly">Q-4 : Do not set the state directly in React</Link></li> 
                        <li><Link to="/blogs/unitTest">Q-5 : About Unit Test</Link></li>
                    </ul>
                
                </div>
        </div>
    );
};

export default Blogs;