import {
    createBrowserRouter,
  } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/orders",
            element:<h1>Orders</h1>,
        },
        {
            path:"/products",
            element:<h1>Products</h1>,
        },
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/register",
          element:<Register/>,
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
          path:"/books/:id",
          element:<SingleBook />
        }
      ]
    },
  ]);
  export default router;
