import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvaider';
import Swal from 'sweetalert2';

const Register = () => {
    const { handaleRegister, manageUsr, setUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    // Password validation function
    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const lengthPattern = /.{6,}/;

        if (!uppercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one uppercase letter.");

        }
        if (!lowercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one lowercase letter.");

        }
        if (!lengthPattern.test(password)) {
            return Swal.fire("Password must be at least 6 characters long.");

        }

    }

    const handalSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name?.length < 5) {
            return Swal.fire("your name Must be more than 5 characters long.");
        }
        const email = form.email.value;
        if (email?.length < 12) {
            return Swal.fire("Your Email Must be more than 12 characters long.");
        }
        const photo = form.photo.value;
        if (photo == 'https') {
            return Swal.fire("Please Valide Photo Url");
        }
        const password = form.password.value;
        if (validatePassword(password)) {
            return
        }
        console.log(name, email, photo, password);

        handaleRegister(email, password)
            .then(res => {
                manageUsr(name, photo);
                const user = res.user
                setUser(user);
                Swal.fire("Registration successful!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire("Registration not successful! email allrady registared", error);
            })
        form.reset()
    }


    return (
        <div className="flex flex-col justify-center pt-32 items-center">
            <div className="card border-2 backdrop-blur-md w-full max-w-lg shrink-0 shadow-2xl" data-aos="zoom-in-up">
                <h1 className="text-5xl font-bold text-center mt-5 text-white">Register now!</h1>
                <form onSubmit={handalSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input bg-transparent input-bordered border-white placeholder-white" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input bg-transparent input-bordered border-white placeholder-white" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Enter your Photo url" className="input bg-transparent input-bordered border-white placeholder-white" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-transparent input-bordered border-white placeholder-white" />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-transparent text-white hover:bg-white/20">Register </button>
                    </div>
                    <p className="ml-4 my-4 text-white">
                        Already have an account? Please <Link className="ml-2 font-semibold underline hover:text-red-600" to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;