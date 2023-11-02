import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Toaster } from "react-hot-toast";


const Layout = () => {

    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Layout;
