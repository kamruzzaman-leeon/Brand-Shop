import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    // console.log(location)
   
    if (loading) {
      return (
          <div className='w-full min-h-screen flex justify-center items-center'>
              <span className="loading loading-bars loading-lg text-primary"></span>
          </div>
      ); // Display a loading indicator while data is being fetched.
  }

    if (!user?.email) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unauthorized access denied. Login first!',
      });

      // Save the current location before redirecting to the login page
      return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
      
    
};

PrivateRoute.propTypes={
    children:PropTypes.object
}
export default PrivateRoute;