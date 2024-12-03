import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handalSubmit = e => {
        
    }


    return (
        <div className="flex flex-col justify-center pt-32 items-center">
            <div className="card border-2 backdrop-blur-md w-full max-w-lg shrink-0 shadow-2xl" data-aos="zoom-in-up">
                <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
                <form onSubmit={handalSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    {/* {
                        error.name && (
                            <label className="label">
                                <span className="text-xs text-red-500">{error.name}</span>
                            </label>
                        )
                    } */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* {
                        error.email && (
                            <label className="label">
                                <span className="text-xs text-red-500">{error.email}</span>
                            </label>
                        )
                    } */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Enter your Photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-transparent ">Register </button>
                        {/* <ToastContainer /> */}
                    </div>
                    <p className="ml-4 my-4">
                        Already have an account? Please <Link className="ml-2 font-semibold underline hover:text-red-600" to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;