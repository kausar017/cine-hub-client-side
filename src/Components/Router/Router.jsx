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
import Favarite from "../Pages/Favarite/Favarite";
import FeaturedMovies from "../Pages/Featured Movies/FeaturedMovies";
import PrivetRout from "../Pages/PrivetRout/PrivetRout";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";

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
        element: <PrivetRout>
          <AllMovies></AllMovies>
        </PrivetRout>,
        loader: () => fetch(`http://localhost:5000/movies`)
      },
      {
        path: '/detals/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivetRout><UpdateMovie></UpdateMovie></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
      },
      {
        path: '/addmovie',
        element: <PrivetRout><AddMovie></AddMovie></PrivetRout>
      },
      {
        path: '/favarite',
        element: <PrivetRout><Favarite></Favarite></PrivetRout>,
        loader: () => fetch(`http://localhost:5000/favarite`)
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