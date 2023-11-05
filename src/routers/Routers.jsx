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
          loader:() => fetch('http://localhost:5000/brand')       
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
            const url = `http://localhost:5000/productbrand/${encodedBrand}`;
            return fetch(url);
          },
        },
        {
          path:'/ProductDetails/:id',
          element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
          
        },
        {
          path:'/ProductUpdate/:id',
          element:<PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        },
        
        {
          path:'/mycart',
          element:<MyCart></MyCart>,
          loader:()=>fetch(`http://localhost:5000/mycart`)
        },
        {
          path:"*",
          element:<NotFound></NotFound>,
      }
      ]
      
    },
  ]);

  export default Routers;