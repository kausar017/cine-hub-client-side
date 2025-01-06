import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import logo from '../../../assets/cina hub logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <div className="bg-white/20">
               
                <footer className="footer text-white flex items-center justify-around p-10">
                    <aside>
                        <img className='w-[100px]' src={logo} alt="" />
                        <p>
                            Progmaing Hero Batch-10 Assingment-10
                            <br />
                            Md.kausar mia -2024
                        </p>
                    </aside>
                    <nav>
                        <div className="flex max-sm:flex-col gap-3">
                            <Link to={'/'} className="btn btn-sm  btn-ghost text-white hover:bg-purple-500"><button>Home</button></Link>
                            <Link to={'/allmovie'} className="btn btn-sm hover:bg-purple-500 btn-ghost text-white "><button>All Movies</button></Link>
                            <Link to={'/addmovie'} className="btn btn-sm hover:bg-purple-500 btn-ghost text-white "><button>Add Movie</button></Link>
                            <Link to={'/favarite'} className="btn btn-sm hover:bg-purple-500 btn-ghost text-white "><button>My Favorites</button></Link>

                        </div>
                     
                        <div className="grid grid-flow-col gap-4">
                            <div>
                                <h6 className="footer-title">Social</h6>
                                <div className="grid grid-flow-col gap-4">
                                    <a href="https://x.com/MDkousarMia1" target="_blank"><CiTwitter size={30}></CiTwitter> </a>
                                    <a href="https://www.instagram.com/md.kousar_mia/" target="_blank"><FaInstagram size={30}></FaInstagram> </a>
                                    <a href="https://web.facebook.com/kausar017" target="_blank"><LuFacebook size={30}></LuFacebook> </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;