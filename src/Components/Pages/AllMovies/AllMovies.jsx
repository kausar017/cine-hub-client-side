import { useLoaderData } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { SiDatabricks } from "react-icons/si";
import { useEffect, useState } from "react";

const AllMovies = () => {
    useEffect(() => {
        document.title = "CENE-HUB | ALL MOVIE";
    }, []);

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const movieAllData = useLoaderData();

    // Sort movies based on rating
    const sortedMovies = [...movieAllData].sort((a, b) => {
        if (sortOrder === "asc") return a.rating - b.rating;
        if (sortOrder === "desc") return b.rating - a.rating; 
        return 0;
    });

    return (
        <div className="pt-[150px] container mx-auto">
            <div>
                <h1 className="text-center text-5xl font-bold text-white">All Movie</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>

            <div className="flex max-sm:flex-col py-5 items-center justify-between">
                <div></div>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered bg-white w-full max-w-xs"
                />
                <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Sort by</option>
                        <option value="asc">Rating: Low to High</option>
                        <option value="desc">Rating: High to Low</option>
                    </select>
                </div>
            </div>

            <div>
                {sortedMovies
                    .filter(
                        (item) =>
                            search === "" || item.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .length === 0 ? (
                    <div className="text-4xl font-bold text-center pt-10 flex flex-col justify-center items-center">
                        Data Not Found
                        <SiDatabricks size={200} color="purple" />
                    </div>
                ) : (
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 p-4 container mx-auto">
                        {sortedMovies
                            .filter((item) => {
                                return search.toLowerCase() === ""
                                    ? item
                                    : item.title.toLowerCase().includes(search);
                            })
                            .map((moviedata) => (
                                <MovieCard key={moviedata._id} moviedata={moviedata} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllMovies;
