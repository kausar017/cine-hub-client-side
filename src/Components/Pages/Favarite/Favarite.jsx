import { useLoaderData } from "react-router-dom";
import FavariteCard from "../FavariteCard/FavariteCard";

const Favarite = () => {
    const favariteData = useLoaderData();
    console.log(favariteData.id);

    return (
        <div className="text-white pt-[100px] container mx-auto">
            <div>
                <h1 className="text-white text-4xl font-bold text-center">Favarite Movie</h1>
                <div className="border-t-2 w-[20%] mx-auto"></div>
            </div>
            <div>
                {favariteData.length == 0 ? (
                    <div className="text-4xl text-white font-bold text-center pt-10 flex flex-col justify-center items-center">
                        Data NOt Found
                        <SiDatabricks size={200} color="white"></SiDatabricks>

                    </div>
                ) :
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4">
                        {
                            favariteData.map((favarite, index) => <FavariteCard key={favarite._id} favarite={favarite}></FavariteCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Favarite;