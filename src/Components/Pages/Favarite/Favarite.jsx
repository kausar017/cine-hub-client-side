import { useLoaderData } from "react-router-dom";
import FavariteCard from "../FavariteCard/FavariteCard";
import { SiDatabricks } from "react-icons/si";
import { useState } from "react";

const Favarite = () => {
    const favariteData = useLoaderData();
    const [repress, setRepress] = useState(favariteData);

    return (
        <div className="text-white pt-[120px] container mx-auto">
            <div>
                <h1 className="text-white text-5xl font-bold text-center">Favarite Movie</h1>
                <div className="border-t-2 w-[25%] mx-auto"></div>
            </div>
            <div>
                {!repress || repress?.length == 0 ? (
                    <div className="text-4xl text-white font-bold text-center pt-10 flex flex-col justify-center items-center">
                        Data Not Found
                        <SiDatabricks size={200} color="white" />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4">
                        {
                            repress?.map((favarite, index) => <FavariteCard key={favarite._id} favarite={favarite} repress={repress} setRepress={setRepress}></FavariteCard>)
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favarite;
