import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import logo from '../../../assets/cina hub logo.png'
const Footer = () => {
    return (
        <div>
           <div>
            <footer className="footer footer-center bg-base-200">
                <aside>
                    <img className='w-[100px]' src={logo} alt="" />
                    <p>
                        Progmaing Hero Batch-10 Assingment-10
                        <br />
                        Md.kausar mia -2024
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://x.com/MDkousarMia1" target="_blank"><CiTwitter size={30}></CiTwitter> </a>
                        <a href="https://www.instagram.com/md.kousar_mia/" target="_blank"><FaInstagram size={30}></FaInstagram> </a>
                        <a href="https://web.facebook.com/kausar017" target="_blank"><LuFacebook size={30}></LuFacebook> </a>
                    </div>
                </nav>
            </footer>
        </div>
        </div>
    );
};

export default Footer;