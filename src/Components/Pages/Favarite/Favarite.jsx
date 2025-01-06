import { useLoaderData } from "react-router-dom";
import FavariteCard from "../FavariteCard/FavariteCard";
import { SiDatabricks } from "react-icons/si";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import { useEffect } from "react";

const Favarite = () => {

    useEffect(() => {
        document.title = "CENE-HUB | ALL MOVIE"
    }, [])


    const { user } = useContext(AuthContext)
    const favariteData = useLoaderData();

    const [allFavarite, setAllFavarite] = useState(favariteData)

    const [repress, setRepress] = useState(favariteData);

    const filtaredData = repress.filter(data => data.email == user.email)

    return (
        <div className=" pt-[120px] container mx-auto">
            <div>
                <h1 className=" text-5xl font-bold text-center text-purple-500">Favarite Movie</h1>
                <div className="border-t-2 w-[25%] mx-auto"></div>
            </div>
            <div>
                {filtaredData?.length == 0 ? (
                    <div className="text-4xl  font-bold text-center pt-10 flex flex-col justify-center items-center">
                        Data Not Found
                        <SiDatabricks size={200} color="purple" />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-4">
                        {
                            allFavarite?.map((favarite, index) => <FavariteCard key={favarite._id} favarite={favarite} repress={repress} setAllFavarite={setAllFavarite} setRepress={setRepress}></FavariteCard>)
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favarite;
