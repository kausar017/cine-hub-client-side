import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import Swal from "sweetalert2";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()

    const { user, handalLogin, handaleGoogle, handaleGithub } = useContext(AuthContext)

    const googleLogin = () => {
        navigate(location.state ? location.state : '/')
        handaleGoogle()

    }
    const githubLogin = () => {
        navigate(location.state ? location.state : '/')
        handaleGithub()
    }

    const handalSubmit = e => {
        console.log(e);

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        handalLogin(email, password)
            // .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(location?.state ? location.state : '/');
                Swal.fire("Successfully logged in!");
            })
            .catch((error) => {
                Swal.fire("Please enter a valid email and password");
            });


    }




    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-32 min-h-[600px]">
                <div className="card border-2 w-full max-w-md shrink-0 shadow-xl backdrop-blur-md">
                    <h1 className="text-5xl font-bold text-center mt-5 text-white">Login now!</h1>
                    <form onSubmit={handalSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-transparent border-white text-white placeholder-white" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered border-white bg-transparent text-white placeholder-white" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-transparent text-white hover:bg-white/20">Login</button>
                        </div>
                        <div className="flex justify-center gap-3">
                            <button onClick={() => googleLogin()} className="btn btn-outline btn-sm text-white hover:bg-white/30"><FcGoogle></FcGoogle>  Google Login</button>
                            <button onClick={() => githubLogin()} className="btn btn-outline btn-sm text-white hover:bg-white/30"><FaGithub color="white"></FaGithub> Github Login</button>
                        </div>
                        <p className="ml-4 my-4 text-white">
                            New to this Website? please<Link className="ml-2 font-semibold underline hover:text-red-500" to={'/register'}>Reagister</Link>
                        </p>
                        {/* <ToastContainer /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;