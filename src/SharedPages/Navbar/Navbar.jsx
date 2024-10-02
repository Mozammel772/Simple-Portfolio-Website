import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-red-100">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div> */}
                    <label className="btn btn-circle swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-red-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  font-bold">
                        <Link to={"/"}><li><a className='text-sm'>Home</a></li></Link>
                        <Link to={"/about"}><li><a className='text-sm'>About</a></li></Link>
                        <Link to={"/service"}> <li><a className='text-sm'>Service</a></li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Mozammel <span>Hosen</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold">
                    <Link to={"/"}><li><a>Home</a></li></Link>
                    <Link to={"/about"}><li><a>About</a></li></Link>
                    <Link to={"/service"}> <li><a>Service</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/contact"} className='btn btn-secondary'>Contact Us</Link>
            </div>
            {/* <div className="avatar online navbar-end">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Navbar;