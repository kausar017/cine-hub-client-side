import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provaider/AuthProvaider";

const PopularActors = () => {

    const { looder } = useContext(AuthContext)

    const [actor, setactor] = useState([])
    // console.log(actor);
   
    useEffect(() => {
        fetch("./PopularActors.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setactor(data)
                looder()
            })
            .catch(error => {
                // console.log(error);
            })
    }, [])


    return (
        <div className="py-[10px] w-11/12 xl:w-9/12 mx-auto ">
            <div className="py-8">
                <h1 className="text-white text-center text-5xl font-bold">Featured Actors</h1>
                <div className="border-t-2 w-[30%] mx-auto"></div>

            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-5 ">
                {
                    actor.map((pepole) =>
                        <div key={pepole.id}>
                            <div className="card border-2 shadow-xl transition hover:scale-110">
                                <figure>
                                    <img
                                        className="transition hover:scale-150 w-full h-[200px]"
                                        src={pepole.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">{pepole.name}</h2>
                                    <p className="font-bold">Famous Movies:</p>
                                    <ul>
                                        {pepole.famousMovies.map((movie, index) => (
                                            <li key={index}>{index + 1} ) {movie}</li>
                                        ))}
                                    </ul>
                                    <p>Age: {pepole.age}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-outline text-white">Actor Detals</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularActors;