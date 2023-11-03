import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AddProduct from "../page/AddProduct";
import MyCart from "../page/MyCart";
import NotFound from "../page/NotFound";
import PrivateRoute from "./PrivateRouter";
import BrandProducts from "../page/BrandProducts";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>, 
          loader:() => fetch('http://localhost:5000/brand/')       
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/add-product',
          element:<AddProduct></AddProduct>,
          // element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>, 
        },
        {
          path: '/brandproduct/:brand',
          element: <BrandProducts></BrandProducts>,
          loader: ({ params }) => {
            const encodedBrand = encodeURIComponent(params.brand);
            const url = `http://localhost:5000/product/${encodedBrand}`;
            return fetch(url);
          },
        },
        
        {
          path:'/my-cart',
          element:<MyCart></MyCart>,
        },
        {
          path:"*",
          element:<NotFound></NotFound>,
      }
      ]
      
    },
  ]);

  export default Routers;