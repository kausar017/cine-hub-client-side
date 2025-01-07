import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../../../assets/cina hub logo.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provaider/AuthProvaider";
// import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const { user, handalLogout } = useContext(AuthContext)
    // theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const hanalTogole = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const logOUt = () => {
        handalLogout()
    }
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const link = <>
        <div className="space-x-3 flex xl:flex-row lg:flex-row md:flex-col max-sm:flex-col bg-transparent">
            <NavLink onClick={() => scrollToSection('bannar')} to={'/'} className="btn btn-sm  btn-outline text-white hover:bg-purple-500"><button>Home</button></NavLink>
            <NavLink to={'/allmovie'} className="btn btn-sm hover:bg-purple-500 btn-outline text-white "><button>All Movies</button></NavLink>

            {
                !user ?
                    ""
                    :
                    <NavLink to={'/addmovie'} className="btn btn-sm hover:bg-purple-500 btn-outline text-white "><button>Add Movie</button></NavLink>

            }
            {
                !user ?
                    ""
                    :
                    <NavLink to={'/favarite'} className="btn btn-sm hover:bg-purple-500 btn-outline text-white "><button>My Favorites</button></NavLink>
            }
            <botton onClick={() => scrollToSection('about')} className="btn btn-sm hover:bg-purple-500 btn-outline text-white ">About Me</botton>
            <button onClick={() => scrollToSection('section1')} className="btn btn-sm hover:bg-purple-500 btn-outline text-white ">Contact </button>


        </div>
    </>
    return (
        <div className="bg-black/20 z-10 fixed w-full">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <img className="max-w-[100px]" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">

                    {
                        user ? <div className="flex flex-col justify-center items-center">
                            <img referrerPolicy="no-referrer" title={user.displayName} className="w-12 rounded-full" src={user?.photoURL} alt="" />
                            <p className="text-white">{user.displayName}</p>
                        </div> : <div ><img className="w-[50px] h-[50px] rounded-full cursor-pointer" src="https://i.postimg.cc/yxBM0XS4/user.png" alt="" /></div>

                    }

                    {
                        user ? <Link to={'/'} onClick={logOUt} className="btn btn-sm btn-outline text-white ">Logout</Link> : <Link to={'/login'} className="btn btn-sm btn-outline text-white">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;