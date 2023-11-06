import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    // console.log(location)
    if(loading)
    {
        return (
          <h1>loading</h1>
        )
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