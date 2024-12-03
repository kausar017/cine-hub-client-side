import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* OutLet */}
            <div className="min-h-[calc(100vh-250px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;