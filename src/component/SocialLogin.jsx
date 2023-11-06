import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from './Button';



const SocialLogin = () => {

    const {googleSignIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()



    const handleGoogleLogin = () => {
      googleSignIn()
        .then((result) => {
          const redirectPath = location.state && location.state.from ? location.state.from : '/';
          navigate(redirectPath);
          toast.success('Successfully logged in!');
        })
        .catch((error) => {
          toast.error('Something went wrong during login.');
        });
    };
    
    return (
        <div className='p-5'>
            <div className='divider'>Continue with</div>
          <div className='text-center'>
          <button onClick={handleGoogleLogin} className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">Google</button>
          
          </div>
            
        </div>
    );
};

export default SocialLogin;