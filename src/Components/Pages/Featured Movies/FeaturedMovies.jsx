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
                <h1 className="text-center  text-5xl font-bold text-white py-5">Featured Movies</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 p-4 container mx-auto">
                {
                    movie.slice(0, 6).map(movies =>
                        <div key={movies._id}>
                            <div className="border-2 backdrop-blur-md transition hover:scale-105 shadow-xl rounded-lg">
                                <figure className="relative">
                                    <img
                                        className='p-2 rounded-lg w-full h-72 object-cover'
                                        src={movies.url}
                                        alt={movies.title} />
                                    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center opacity-0 transition hover:opacity-100">
                                        <h3 className="text-white text-lg font-bold px-4 text-center">{movies.title}</h3>
                                    </div>
                                </figure>
                                <div className="text-white p-3">
                                    <h2 className="card-title text-lg font-bold">{movies.title}</h2>
                                    <p>Genre: {movies.genre}</p>
                                    <p>Duration: {movies.duration} Minutes</p>
                                    <p>Movie Release: {movies.Release}</p>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <h4 className="text-sm font-semibold">Rating:</h4>
                                        <ReactStars
                                            count={5}
                                            value={movies.rating}
                                            size={25}
                                            activeColor="#ffd700"
                                            isHalf={true}
                                        />
                                        <p>{movies.rating}</p>
                                    </div>
                                    <p className="line-clamp-3 text-sm">summary: {movies.Summary.slice(0,25)}</p>
                                    <div className="card-actions justify-end mt-2">
                                        <Link to={`/detals/${movies._id}`} className="btn btn-sm btn-outline text-white hover:bg-[#F739B6] hover:text-white">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


            <div className="flex flex-col justify-center items-center py-3">
                {
                    movie ? <Link to={'/allmovie'} className="btn btn-outline text-white hover:bg-purple-400 hover:text-white">View All Movie</Link> : <p></p>
                }

            </div>
        </div>

    );
};

export default FeaturedMovies;