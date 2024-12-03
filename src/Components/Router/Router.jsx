import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bannar from "../Pages/Bannar/Bannar";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path:'/',
            element: <Bannar></Bannar>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default Router;