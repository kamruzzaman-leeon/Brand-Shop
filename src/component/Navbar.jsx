import { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';

const navlinks = (
    <>
        <li className="md:mx-5"><CustomNavLink to="/" >Home</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/add-product" >Add Product</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/my-cart" >My Cart</CustomNavLink></li>



    </>
)

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={`navbar fixed top-0 left-0 w-full z-10 p-0 transition ${scrolled ? 'bg-white text-black' : 'bg-none text-white'}`}>

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    {/* Use the logo image here */}
                    <img src={'/public/logo/brand-shop-icon.png'} alt="Logo" className="w-8 h-8" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal">
                    <li className="md:mx-5"><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
