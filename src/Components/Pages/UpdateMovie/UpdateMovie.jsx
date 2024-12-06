import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateMovie = () => {


    const { id } = useParams()
    // console.log(id);

    const updateData = useLoaderData()
    console.log(updateData);
    const { _id, url, title, genre, duration, Release, rating: ret, Summary } = updateData


    const handalUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const url = form.url.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const Release = form.Release.value;
        const Summary = form.Summary.value;

        const movieData = { url, title, genre, duration, Release, rating, Summary };
        // console.log(movieData);
        fetch(`http://localhost:5000/movies/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Movie Updated successfuly ',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
            .catch(error => {
                console.log(error);

            })
    }

    const [rating, setRating] = useState(ret || 0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    return (
        <div>
            <div>
                <div className="flex flex-col justify-center pt-24 items-center min-h-screen container mx-auto p-3">
                    <div className="card border-2 rounded-xl  w-full py-10 backdrop-blur-md">
                        <form onSubmit={handalUpdate} className="card-body">
                            <h1 className="text-center text-4xl font-bold text-white">Update Movie </h1>
                            <div className="border-t-2 w-[20%] mx-auto"></div>
                            <div className="form-control grid md:grid-cols-2 md:space-x-2">
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">Movie Poster (URL)</span>
                                    </label>
                                    <input type="url" name="url" defaultValue={url} className="input input-bordered text-white border-white w-full bg-white/10" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">Movie Title</span>
                                    </label>
                                    <input type="text" name="title" defaultValue={title} className="input input-bordered  text-white border-white w-full bg-white/10" />
                                </div>
                            </div>

                            <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                                <div>
                                    <label className=" text-white">Genre</label>
                                    <select id="dayInput" defaultValue={genre} name="genre" className="input input-bordered  text-white border-white w-full bg-white/10">
                                        <option className="text-black" value="">Select a genre</option>
                                        <option className="text-black" value="Comedy">Comedy</option>
                                        <option className="text-black" value="Drama">Drama</option>
                                        <option className="text-black" value="Horror">Horror</option>
                                        <option className="text-black" value="Action">Action</option>
                                        <option className="text-black" value="Romance">Romance</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">Duration (in minutes)</span>
                                    </label>
                                    <input type="number" name="duration" defaultValue={duration} className="input input-bordered  text-white border-white w-full bg-white/10" />
                                </div>
                            </div>

                            <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                                <div>
                                    <label className=" text-white">Release Year</label>
                                    <select id="dayInput" defaultValue={Release} name="Release" className="input input-bordered  text-white border-white w-full bg-white/10">
                                        <option className="text-black" value="">Select release year</option>
                                        <option className="text-black" value="2024">2024</option>
                                        <option className="text-black" value="2023">2023</option>
                                        <option className="text-black" value="2022">2022</option>
                                        <option className="text-black" value="2021">2021</option>
                                    </select>
                                </div>
                                <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
                                    <h2 className="text-white">Rate the Movie</h2>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        value={rating}
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
                                <textarea name="Summary" id="" rows="5" className=" text-white border-white w-full bg-white/10 p-3 rounded-xl outline-none" defaultValue={Summary}></textarea>
                                {/* <textarea name="" id="" rows="10"></textarea> */}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-transparent border text-white hover:bg-white/30">Update Movie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMovie;