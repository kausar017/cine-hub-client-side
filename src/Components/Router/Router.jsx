import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bannar from "../Pages/Bannar/Bannar";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AddMovie from "../Pages/AddMovie/AddMovie";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Bannar></Bannar> 
      },
      {
        path: '/allmovie',
        element: <AllMovies></AllMovies>,
        loader: () => fetch(`http://localhost:5000/movies`)
      },
      {
        path: '/detals/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
      },
      {
        path: '/addmovie',
        element: <AddMovie></AddMovie>
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