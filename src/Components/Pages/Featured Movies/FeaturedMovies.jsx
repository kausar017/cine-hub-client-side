import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import { SiDatabricks } from "react-icons/si";

const FeaturedMovies = () => {
    const [movie, setMovie] = useState()
    // console.log(movie);
    const { user } = useContext(AuthContext);

    const [loding, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false)
            })
            .catch(error => console.error(error));
    }, [])
    if (loding) {
        return <p className="text-white text-center text-xl"><Loader></Loader> </p>;
    };

    if (!movie || movie.length === 0) {
        return (
            <>
                <div>
                    <h1 className="text-center text-white text-5xl font-bold">Featured Movies</h1>
                    <div className="border-t-2 w-[20%] mx-auto"></div>
                </div>
                <div className="text-center text-white font-bold text-3xl flex flex-col justify-center items-center py-10">
                    <p>Data Not Found</p>
                    <SiDatabricks size={100} color="white"></SiDatabricks>
                </div>

            </>
        );
    }

    const sortingMovie = movie
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6)



    return (
        <div>
            <div>
                <h1 className="text-center text-white text-5xl font-bold">Featured Movies</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4 container mx-auto">
                {
                    sortingMovie.map(movies =>
                        <div key={movies._id}>
                            <div className="card card-compact border-2 backdrop-blur-md  shadow-xl">
                                <figure>
                                    <img
                                        className='p-2 rounded-lg w-full object-cover md:h-[300px]'
                                        src={movies.url}
                                        alt={movies.url} />
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Movie Name: {movies.title}</h2>
                                    <p>Genre: {movies.genre}</p>
                                    <p>Duration: {movies.duration} Minit</p>
                                    <p>Movie Release: {movies.Release}</p>
                                    <div className='flex flex-row space-x-2'>
                                        <h4>Rating:</h4>
                                        <div className='flex space-x-1 items-center'>
                                            {
                                                <ReactStars
                                                    count={5}
                                                    value={movies.rating}
                                                    size={30}
                                                    activeColor="#ffd700"
                                                    isHalf={true}
                                                />

                                            }
                                            <p>{movies.rating}</p>
                                        </div>
                                    </div>
                                    <p>Summary: {movies.Summary}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/detals/${movies._id}`} className="btn btn-sm bg-transparent border text-white hover:bg-[#F739B6]">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div >

            <div className="flex flex-col justify-center items-center py-3">
                {
                    user ? <p></p> : <Link to={'/allmovie'} className="btn border bg-transparent text-white hover:bg-pink-500/50">View All Movie</Link>
                }

            </div>
        </div>

    );
};

export default FeaturedMovies;