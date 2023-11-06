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
import ProductDetails from "../page/productDetails";
import ProductUpdate from "../page/ProductUpdate";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>, 
          loader:() => fetch('https://brandshop-server-seven.vercel.app/brand')       
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
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>, 
        },
        {
          path: '/brandproduct/:brand',
          element: <BrandProducts></BrandProducts>,
          loader: ({ params }) => {
            const encodedBrand = encodeURIComponent(params.brand);
            const url = `https://brandshop-server-seven.vercel.app/productbrand/${encodedBrand}`;
            return fetch(url);
          },
        },
        {
          path:'/ProductDetails/:id',
          element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://brandshop-server-seven.vercel.app/product/${params.id}`),
          
        },
        {
          path:'/ProductUpdate/:id',
          element:<PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
          loader:({params})=>fetch(`https://brandshop-server-seven.vercel.app/product/${params.id}`)
        },
        
        {
          path:'/mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader:()=>fetch(`https://brandshop-server-seven.vercel.app/mycart`)
        },
        {
          path:"*",
          element:<NotFound></NotFound>,
      }
      ]
      
    },
  ]);

  export default Routers;