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
import AboutePage from "../Pages/Aboute Page/AboutePage";

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
        loader: () => fetch(`https://cenehub.vercel.app/movies`)
      },
      {
        path: '/detals/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://cenehub.vercel.app/movies/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivetRout><UpdateMovie></UpdateMovie></PrivetRout>,
        loader: ({ params }) => fetch(`https://cenehub.vercel.app/movies/${params.id}`)
      },
      {
        path: '/addmovie',
        element: <PrivetRout><AddMovie></AddMovie></PrivetRout>
      },
      {
        path: '/favarite',
        element: <PrivetRout><Favarite></Favarite></PrivetRout>,
        loader: () => fetch(`https://cenehub.vercel.app/favarite`)
      },
      {
        path: '/about',
        element: <AboutePage></AboutePage>,
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