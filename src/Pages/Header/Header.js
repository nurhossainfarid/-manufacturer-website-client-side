import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/carBro.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
      };
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='text-2xl'><Link to={'/home'}>Home</Link></li>
                    <li className='text-2xl'><Link to={'/blogs'}>Blogs</Link></li>
                    <li className='text-2xl'><Link to={'/login'}>Login </Link></li>
                    <li className='text-2xl'><Link to={'/signup'}>Sign up</Link></li>
                </ul>
                </div>
                <Link to={'/home'} className="normal-case text-5xl flex"><img src={Logo} className='w-32' alt="" /></Link>
                {/* <span className='text-primary'>.car</span><span className='text-secondary'>Bro</span> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-2xl'><Link to={'/home'}>Home</Link></li>
                    <li className='text-2xl'><Link to={'/blogs'}>Blogs</Link></li>
                </ul>
                <Link to={'/home'} className="normal-case text-5xl block md:hidden"><img src={Logo} className='w-32' alt="" /></Link>
            </div>
            <div className="navbar-end hidden md:block">
                <ul className="menu menu-horizontal p-0 flex justify-center items-center">
                    <li className='text-2xl'>
                        {user ?
                        <>
                            <Link to={'/dashboard'}>Dashboard</Link>
                            <button onClick={logout}>Logout</button>
                        </> : <Link to={'/login'}>Login </Link>}
                        
                    </li>
                    <li className='text-2xl'>{
                        !user && '|'
                    }</li>
                    <li className='text-2xl'>{
                        !user && <Link to={'/signup'}>Sign up</Link>
                    }</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;