import { useEffect, useState } from "react";

const PopularActors = () => {

    const [actor, setactor] = useState([])
    // console.log(actor);

    useEffect(() => {
        fetch("./PopularActors.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setactor(data)
            })
            .catch(error => {
                console.log(error);

            })
    }, [])

    return (
        <div className="pt-[150px] w-9/12 mx-auto ">
            <div className="py-8">
                <h1 className="text-purple-500 text-center text-5xl font-bold">Featured Actors</h1>
                <div className="border-t-2 w-[30%] mx-auto"></div>

            </div>
            <div className="grid md:grid-cols-4 gap-4 ">
                {
                    actor.map((pepole) =>
                        <div key={pepole.id}>
                            <div className="card card-compact border-2 shadow-xl transition hover:scale-110">
                                <figure>
                                    <img
                                        className="transition hover:scale-150 w-full"
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
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