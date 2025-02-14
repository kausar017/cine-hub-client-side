import { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../Provaider/AuthProvaider";
import { useEffect } from "react";
import bg from '../../../assets/polygon-scatter-haikei.png'
const AddMovie = () => {

    useEffect(() => {
        document.title = "CENE-HUB | ADD MOVIE"
    }, [])


    const { user } = useContext(AuthContext)
    const email = (user.email)

    const handalSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const url = form.url.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const Release = form.Release.value;
        const Summary = form.Summary.value;

        const movieData = { url, title, genre, duration, Release, rating, Summary };
        // console.log(movieData);

        // validation 
        if (!url || !url.startsWith("http")) {
            return Swal.fire("Please enter a valid URL.");
        }
        if (!title) {
            return Swal.fire("Title cannot be empty.");
        }
        if (!genre) {
            return Swal.fire("Please select a genre.");
        }
        if (!duration || duration < 60) {
            return Swal.fire("Duration must be 60 minutes or more.");
        }
        if (!Release) {
            return Swal.fire("Please select a release year.");
        }
        if (!rating || rating === 0) {
            return Swal.fire("Please provide a rating.");
        }
        if (!Summary || Summary.length < 10) {
            return Swal.fire("Summary must be at least 10 characters long.");
        }
        const moviData = {
            ...movieData,
            userEmail: email

        }
        fetch("https://cenehub.vercel.app/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(moviData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire("Movie added successfully!")
                }
                form.reset()
            })
            .catch((error) => {
                // console.log(error);
                Swal.fire("Failed to add movie. Please try again.");
            });
    };

    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <div>
            <div className="flex flex-col justify-center pt-32 items-center  md:w-8/12 mx-auto p-3">
                <div className="card border-2 rounded-xl  w-full py-10 backdrop-blur-md" >
                    <form onSubmit={handalSubmit} className="card-body">
                        <h1 className="text-center text-4xl font-bold text-white">Add Movie </h1>
                        <div className="border-t-2 w-[20%] mx-auto"></div>
                        <div className="form-control grid md:grid-cols-2 md:space-x-2">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Movie Poster (URL)</span>
                                </label>
                                <input type="url" name="url" placeholder="Movie Poster" className="input input-bordered border-white text-white placeholder:text-white bg-transparent  w-full " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Movie Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Enter movie title" className="input input-bordered w-full border-white text-white placeholder:text-white bg-transparent" />
                            </div>
                        </div>

                        <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                            <div>
                                <label className=" text-white">Genre</label>
                                <select id="dayInput" name="genre" className="input input-bordered  border-white text-white placeholder:text-white bg-transparent  w-full ">
                                    <option className="text-purple-500" value="">Select a genre</option>
                                    <option className="text-purple-500" value="Comedy">Comedy</option>
                                    <option className="text-purple-500" value="Drama">Drama</option>
                                    <option className="text-purple-500" value="Horror">Horror</option>
                                    <option className="text-purple-500" value="Action">Action</option>
                                    <option className="text-purple-500" value="Romance">Romance</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Duration (in minutes)</span>
                                </label>
                                <input type="number" name="duration" placeholder="Enter duration in minutes" className="input input-bordered  border-white text-white placeholder:text-white bg-transparent  w-full " />
                            </div>
                        </div>

                        <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                            <div>
                                <label className="text-white ">Release Year</label>
                                <select id="dayInput" name="Release" className="input input-bordered  border-white text-white placeholder:text-white bg-transparent  w-full ">
                                    <option className="text-purple-500" value="">Select release year</option>
                                    <option className="text-purple-500" value="2024">2024</option>
                                    <option className="text-purple-500" value="2023">2023</option>
                                    <option className="text-purple-500" value="2022">2022</option>
                                    <option className="text-purple-500" value="2021">2021</option>
                                </select>
                            </div>
                            <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
                                <h2 className="text-white">Rate the Movie</h2>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={40}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                />
                                <p className="text-white" style={{ marginTop: "10px", fontSize: "18px" }}>
                                    Your Rating: <strong>{rating} Stars</strong>
                                </p>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Summary</span>
                            </label>
                            <textarea name="Summary" id="" rows="5" className=" border-2  w-full border-white text-white placeholder:text-white bg-transparent  p-3 rounded-xl" placeholder="Enter a short summary of the movie"></textarea>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-white text-purple-500 hover:bg-rose-400/30">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;