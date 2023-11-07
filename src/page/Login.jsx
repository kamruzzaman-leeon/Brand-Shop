import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../component/SocialLogin";
import { Helmet } from "react-helmet";
import Button from "../component/Button";



const Login = () => {
  const { user, signIn, googleProvider } = useContext(AuthContext);

  const location = useLocation();

  // console.log(location)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
  
    signIn(email, password)
            .then(() => {
              toast.success('Successfully logged in!');
              navigate(location.state && location.state.from ? location.state.from : '/');

                
            })
      .catch((error) => {
        console.log('Error:', error); 
        if (error.code ==='auth/wrong-password') {
          toast.error('Incorrect password. Please try again.');
        } else if (error.code === 'auth/user-not-found') {
          toast.error('No user with this email found. Please register or check your email.');
        } else {
        
          toast.error('An error occurred while trying to log in.');
        }
      });
  };
  
  
  return (
    <div className="hero min-h-screen bg-none shadow-2xl">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <h3 className="py-6 text-3xl">Welcome to BrandShop</h3>
          <p className="py-6">

          Your Beauty Haven Awaits! Explore our world of exquisite cosmetics and skincare, where luxury meets quality. Unleash your inner beauty and transform your daily routine into a pampering experience.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-opacity-5 bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <Button>Login</Button>
            </div>
          </form>
          <div className="label mx-auto mb-2">
            <p className="label-text-alt "> New Here?</p>
            <Link to='/register' className="label-text-alt link link-hover text-blue-500 font-bold">Register</Link>
          </div>
          <SocialLogin></SocialLogin>


        </div>
      </div>
    </div>
  );
};

export default Login;