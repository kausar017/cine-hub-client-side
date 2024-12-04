import { useLoaderData } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { SiDatabricks } from "react-icons/si";

const AllMovies = () => {

    const movieAllData = useLoaderData()
    // console.log(movieAllData);

    return (
        <div className="pt-[100px] container mx-auto">
            <div>
                <h1 className="text-center text-5xl font-bold text-white">All Movie</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>
            <div>
                {
                    movieAllData.length == 0 ? (
                        <div className="text-4xl text-white font-bold text-center pt-10 flex flex-col justify-center items-center">
                            Data NOt Found
                            <SiDatabricks size={200} color="white"></SiDatabricks>

                        </div>
                    )
                        :
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4">
                            {
                                movieAllData.map(moviedata =>

                                    <MovieCard key={moviedata._id} moviedata={moviedata}></MovieCard>

                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllMovies;