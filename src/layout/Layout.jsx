
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='min-h-screen bg-image'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Layout;