import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }


    const menuItems = <>
        <li className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400  font-bold hover:text-purple-800'><Link to='/'>Home</Link></li>
        
        {user?.uid ?
            <>
                <li className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400  font-bold hover:text-purple-800'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 font-bold hover:text-purple-800'><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            : <li className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 font-bold  hover:text-purple-800'><Link to='/login '>Login</Link></li>}
    </>


    return (
        <div className="navbar bg-base-100 flex justify-between px-8 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-700 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 font-bold font-serif">Firebase Authentication</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to='' className="btn bg-red-700 rounded-full border-none hidden lg:block pt-4">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;