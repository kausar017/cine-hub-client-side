import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const FavariteCard = ({ favarite, index }) => {

    // console.log(favarite);
    const { _id, url, title, rating, day, genre, duration, Release, Summary } = favarite;
    console.log(_id);

    const handalFavariteDelete = _id => {
        console.log('favarite movie delete', _id);
        // fetch(`http://localhost:5000/favarite/${_id}`, {
        //     method: 'DELETE',
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //     })
        //     .catch(error => {
        //         console.log(error);

        //     })
    }


    return (
        <div>
            <div className='container mx-auto'>
                <div className="card card-compact border-2 backdrop-blur-md  shadow-xl">
                    <figure>
                        <img
                            className='p-2 rounded-lg'
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
                        <p>Summary: {Summary}</p>
                        <div className="card-actions justify-end">
                            <Link onClick={() => handalFavariteDelete(_id)} className="btn btn-sm bg-transparent border text-white hover:bg-[#F739B6]"><MdDeleteOutline size={20} color='red'></MdDeleteOutline> Delete</Link>
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