import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {

    const handalSubmit = e => {
        e.preventDefault()
    }
    



    return (
        <div>
             <div className="flex flex-col justify-center items-center pt-32 min-h-[600px]">
            <div className="card border-2 w-full max-w-md shrink-0 shadow-xl backdrop-blur-md">
                <h1 className="text-5xl font-bold text-center mt-5 ">Login now!</h1>
                <form onSubmit={handalSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-transparent" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-transparent" required />
                        <label className="label">
                            <Link to={'/forget'} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn ">Login</button>
                    </div>
                    <div className="flex justify-center gap-3">
                        <button  className="btn btn-outline btn-sm "><FcGoogle></FcGoogle>  Google Login</button>
                        <button className="btn btn-outline btn-sm "><FaGithub color="white"></FaGithub> Github Login</button>
                    </div>
                    <p className="ml-4 my-4">
                        New to this Website? please<Link className="ml-2 font-semibold underline" to={'/register'}>Reagister</Link>
                    </p>
                    {/* <ToastContainer /> */}
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;