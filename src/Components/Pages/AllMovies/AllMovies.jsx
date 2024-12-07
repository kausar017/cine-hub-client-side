import { useLoaderData } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { SiDatabricks } from "react-icons/si";
import { useEffect, useState } from "react";

const AllMovies = () => {

    const [search, setSearch] = useState("")
    console.log(search);

    const movieAllData = useLoaderData()

    return (
        <div className="pt-[150px] container mx-auto">
            <div>
                <h1 className="text-center text-5xl font-bold text-purple-500">All Movie</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>

            <div className="flex flex-col py-5 items-center">
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Type here" className="input input-bordered  bg-white/30 w-full  max-w-xs" />
            </div>

            <div>
                {
                    movieAllData.filter((item) =>
                        search === "" || item.title.toLowerCase().includes(search.toLowerCase())
                    ).length == 0 ? (
                        <div className="text-4xl  font-bold text-center pt-10 flex flex-col justify-center items-center">
                            Data NOt Found
                            <SiDatabricks size={200} color="purple"></SiDatabricks>

                        </div>
                    )
                        :
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4">
                            {
                                movieAllData.filter((item) => {
                                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                                }).map(moviedata =>

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