import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { SiDatabricks } from "react-icons/si";



const FeaturedMovies = () => {
    const [movie, setMovie] = useState()
    // console.log(movie);

    const [loding, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://cenehub.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false)
            })
            .catch(error => console.error(error));
    }, [])
    if (loding) {
        return <Loader></Loader>
    };

    if (!movie || movie.length === 0) {
        return (
            <>
                <div>
                    <h1 className="text-center  text-5xl font-bold">Featured Movies</h1>
                    <div className="border-t-2 w-[20%] mx-auto"></div>
                </div>
                <div className="text-center  font-bold text-3xl flex flex-col justify-center items-center py-10">
                    <p>Data Not Found</p>
                    <SiDatabricks size={100} color="white"></SiDatabricks>
                </div>

            </>
        );
    }



    return (
        <div>
            
            <div>
                <h1 className="text-center  text-5xl font-bold text-purple-800 py-5">Featured Movies</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-4 container mx-auto">
                {
                    movie.slice(0, 6).map(movies =>
                        <div key={movies._id}>
                            <div className="card card-compact border-2 backdrop-blur-md transition hover:scale-105 overflow-hidden  shadow-xl">
                                <figure>
                                    <img
                                        className='p-2 rounded-lg w-full object-cover md:h-[300px] transition hover:scale-150 overflow-hidden'
                                        src={movies.url}
                                        alt={movies.url} />
                                </figure>
                                <div className="card-body text-purple-400">
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
                                        <Link to={`/detals/${movies._id}`} className="btn btn-sm btn-outline  hover:bg-[#F739B6]">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div >

            <div className="flex flex-col justify-center items-center py-3">
                {
                    movie ? <Link to={'/allmovie'} className="btn btn-outline text-purple-600 hover:bg-purple-400 hover:text-white">View All Movie</Link> : <p></p>
                }

            </div>
        </div>

    );
};

export default FeaturedMovies;