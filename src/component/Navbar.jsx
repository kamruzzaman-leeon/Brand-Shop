import { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from 'react-router-dom';
import CustomNavLink from './CustomNavLink';
import toast from 'react-hot-toast';

const navlinks = (
    <>
        <li className="md:mx-5"><CustomNavLink to="/" >Home</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/add-product" >Add Product</CustomNavLink></li>
        <li className="md:mx-5"><CustomNavLink to="/my-cart" >My Cart</CustomNavLink></li>



    </>
)

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    // console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => {

                toast.success('successfully user logged out!')
            })
            .catch(error => {
                // console.error(error)
                toast.error('Something wrong here!')
            })

    }

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (

        <div className='Container mx-auto px-5'>
         {/* <div className={`navbar fixed top-0 left-0 w-full z-10 p-0 transition ${scrolled ? 'bg-white text-black' : 'bg-none text-white'}`}> */}
        <div className={`navbar top-0 left-0 w-full p-0 `}>
        
            <div className="navbar-start justify-between lg:justify-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* <ul tabIndex={0} className={`flex flex-col gap-4 rounded-box dropdown-content mt-3 z-[1] p-4 shadow w-52 ${scrolled ? 'bg-white text-black' : 'bg-none text-white'}`}> */}
                    <ul tabIndex={0} className={`flex flex-col gap-4 rounded-box dropdown-content mt-3 z-[1] p-4 shadow w-52`}>
                        {navlinks}

                    </ul>
                </div>
                <Link to="/" className=" sm:text-center normal-case text-xl ">

                    <img src={'logo/brand-shop-icon.png'} alt="Logo" className="w-12 h-12 bg-white" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row gap-4 lg:gap-8 px-1">
                    {navlinks}
                </ul>
            </div>


            <div className="navbar-end ">
                {
                    user?.email ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                                <div className="w-10 rounded-full text-black">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black  bg-base-100 rounded-box w-52">

                                <li className="p-2">{user.displayName}</li>
                                <li><button onClick={handleLogout}>Logout</button></li>

                            </ul>
                        </div>
                        :
                        <ul className="flex flex-col gap-4">
                            <li className="md:mx-5"><CustomNavLink to="/login">Login</CustomNavLink></li>
                        </ul>
                }
            </div>

        </div>
        </div>
    );
};

export default Navbar;
