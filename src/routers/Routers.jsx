import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AddProduct from "../page/AddProduct";
import MyCart from "../page/MyCart";
import NotFound from "../page/NotFound";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>, 
          loader:() => fetch('brands.json')       
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