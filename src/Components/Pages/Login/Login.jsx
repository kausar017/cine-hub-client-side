import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const naviGate = useNavigate()
    const location = useLocation()
    const { user, handalLogin, handaleGoogle, handaleGithub } = useContext(AuthContext)
    const pathname = location.state || '/';

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        handalLogin(data.email, data.password)
            .then(data => {
                // console.log(data);
                naviGate(pathname);
                Swal.fire("Successfully logged in!");
            })
            .catch((error) => {
                Swal.fire("Please enter a valid email and password");
            });
    };

    useEffect(() => {
        document.title = "CENE-HUB | LOGIN"
    }, [])

    const googleLogin = () => {
        handaleGoogle()
            .then(res => {
                naviGate(pathname)

            })
    }

    const githubLogin = () => {
        handaleGithub()
            .then(res => {
                naviGate(pathname)

            })
    }

   
    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-36 min-h-[600px]">
                <div className="card border-2 w-full max-w-md shrink-0 shadow-xl bg-purple-400 backdrop-blur-md">
                    <h1 className="text-5xl font-bold text-center mt-5 text-purple-900">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered text-purple-600" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered text-purple-600" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-white text-purple-500 hover:bg-purple-500 hover:text-white">Login</button>
                        </div>
                        <div className="flex justify-center gap-3">
                            <button onClick={() => googleLogin()} className="btn btn-outline btn-sm text-white hover:bg-purple-900/50 hover:text-white"><FcGoogle></FcGoogle>  Google Login</button>
                            <button onClick={() => githubLogin()} className="btn btn-outline btn-sm text-white hover:bg-purple-900/50 hover:text-white"><FaGithub color="white"></FaGithub> Github Login</button>
                        </div>
                        <div className="ml-4 my-4 text-white">
                            New to this Website? please<Link className="ml-2 font-semibold underline hover:text-red-500" to={'/register'}>Reagister</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;