import PropTypes from 'prop-types';
// import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provaider/AuthProvaider';


const FavariteCard = ({ favarite, index, repress, setRepress, setAllFavarite }) => {
    // console.log(favarite);

    const { _id, url, title, rating, day, genre, duration, Release, Summary } = favarite;
    // console.log(_id);


    const handalFavariteDelete = _id => {
        // console.log('favarite movie delete', _id);

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
                fetch(`https://cenehub.vercel.app/favarite/${_id}`, {
                    method: 'DELETE',
                })
                    // .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Movie has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        // console.log(error);

                    })
                const repressData = repress.filter(repres => repres._id !== _id);
                // console.log(repressData);

                setAllFavarite(repressData)
            }

        });
    }

    return (
        <div>
            <div className='container mx-auto'>
                <div className="  border-2 backdrop-blur-md transition hover:scale-105 overflow-y- shadow-xl rounded-lg">
                    <figure>
                        <img
                            className='p-2 rounded-lg w-full h-72 object-cover'
                            src={url}
                            alt={url} />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Movie Name: {title}</h2>
                        <p>Genre: {genre}</p>
                        <p>Duration: {duration} Minit</p>
                        <p>Movie Release: {Release}</p>
                        <div className='flex flex-row space-x-2'>
                            <h4>Rating:</h4>
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
                                <p>{rating}</p>
                            </div>
                        </div>
                        <p>Summary: {Summary.slice(0,25)}</p>
                        <div className="card-actions justify-end">
                            <Link onClick={() => handalFavariteDelete(_id)} className="btn btn-sm btn-outline text-white hover:bg-[#F739B6]"><MdDeleteOutline size={20} color='red'></MdDeleteOutline> Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FavariteCard.propTypes = {

};

export default FavariteCard;