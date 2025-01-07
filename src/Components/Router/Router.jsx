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
import PrivetRout from "../Pages/PrivetRout/PrivetRout";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";
import AboutePage from "../Pages/Aboute Page/AboutePage";
import PopularActors from "../Pages/PopularActors/PopularActors";
import Contact from "../Pages/Contact/Contact";

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
        element:
          <AllMovies></AllMovies>,

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      ,
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

export default Router;