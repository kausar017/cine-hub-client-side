
import PropTypes from 'prop-types';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { MdDeleteOutline, MdOutlineFavorite } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provaider/AuthProvaider';
import { RxUpdate } from 'react-icons/rx';
import { useEffect } from 'react';

const Details = () => {

    useEffect(() => {
        document.title = "DITALS"
    }, [])

    const dataDetailes = useLoaderData()
    // console.log(dataDetailes);
    const navigate = useNavigate()
    const [refress, setRefress] = useState()

    const { user } = useContext(AuthContext)
    const email = user?.email
    console.log(email);

    const { _id, url, title, genre, duration, Release, rating, Summary } = dataDetailes;
    // console.log(_id);
    const favarite = { url, title, genre, duration, Release, rating, Summary, email }


    const handalDelete = (_id) => {
        // console.log('handal delet', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://cenehub.vercel.app/movies/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        navigate("/allmovie")
                    })
                    .catch(error => {
                        // console.log(error);
                    })
                const refressData = refress.filter(refres => refres._id !== _id);
                setRefress(refressData);

            }
        });
    }

    const handaleFaborite = () => {

        fetch(`https://cenehub.vercel.app/favarite`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favarite)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Favorite Added:', data);
                if (data.insertedId) {
                    Swal.fire("Success!", "Movie added to favorites", "success");
                    navigate("/favarite");
                }
                else if (data.insertedId = insertedId) {
                    Swal.fire('Data All Rady Added');
                }
            })
            .catch(error => {
                // console.log(error);
                Swal.fire("Movie all Rady Added!", "Could not add movie to favorites", "error");
            });
    };


    return (
        <div className=' pt-[150px] p-3 container mx-auto'>
            <div>
                <div
                    className="hero min-h-[600px]"
                    style={{
                        backgroundImage: `url(${url})`,

                    }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="text-white">
                            <h1 className="mb-5 text-4xl font-bold">Movie: {title}</h1>
                            <div className="mb-5">
                                <p className='text-lg'><span className='font-bold'>Genre: </span> {genre}</p>
                                <p className='text-lg'><span className='font-bold'>Duration: </span> {duration}</p>
                                <p className='text-lg'><span className='font-bold'>Release: </span> {Release}</p>
                                <div className='flex flex-row items-center space-x-2'>
                                    <h4 className='text-lg'>Rating:</h4>
                                    <div className='flex space-x-1 items-center'>
                                        {
                                            <ReactStars
                                                count={5}
                                                value={rating}
                                                size={30}
                                                activeColor="#ffd700"
                                                isHalf={true}
                                            />

                                        }
                                        <p className='text-lg font-bold text-yellow-300'>{rating}</p>
                                    </div>
                                </div>
                                <p className='text-lg'><span className='font-bold'>Summary: </span> {Summary}</p>
                            </div>
                            <div className='flex max-sm:flex-col md:items-center md:justify-center max-sm:space-y-3 space-x-3'>
                                <button onClick={() => handalDelete(_id)} title='please click the button or delete Movie' className="btn btn-sm bg-red-400 text-white"><MdDeleteOutline size={20} color='red'></MdDeleteOutline>Delete Movie</button>
                                <Link to={`/update/${_id}`} title='please click the button or update movie data' className="btn btn-sm bg-purple-700/50 text-white"><RxUpdate size={20}></RxUpdate> Update</Link>
                                <button onClick={handaleFaborite} title='please click the button or add favarite movie' className="btn btn-sm bg-pink-400 text-white"><MdOutlineFavorite size={20} color='#F739B6'></MdOutlineFavorite> Add to Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {

};

export default Details;