import { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from 'react-router-dom';
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
    // const [scrolled, setScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        setTheme(localTheme || "light");
        document.querySelector('html').setAttribute('data-theme', localTheme || "light");
    }, []);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    };


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
            <div className={`navbar top-0 left-0 w-full p-0 dark:bg-black dark:text-white`}>

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
                    <div className='flex-none px-5'>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"
                                onChange={handleToggle}
                                checked={theme === "light"}
                            />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    {
                        user?.email ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                                    <div className="w-10 rounded-full text-black">
                                        <img src={user?.photoURL} alt={user?.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

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
