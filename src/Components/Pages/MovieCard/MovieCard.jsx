import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const MovieCard = ({ moviedata }) => {
    // console.log(moviedata);
    const { _id, url, title, rating, day, genre, duration, Release, Summary } = moviedata;

    return (
        <div className='container mx-auto'>
            <div className="  border-2 backdrop-blur-md transition hover:scale-105 overflow-y- shadow-xl rounded-lg">
                <figure>
                    <img
                        className='p-2 rounded-lg w-full h-72 object-cover'
                        src={url}
                        alt={url} />
                </figure>
                <div className="card-body text-purple-500">
                    <h2 className="card-title">{title}</h2>
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
                    <p title={Summary}>Summary: {Summary.slice(0, 25)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/detals/${_id}`} className="btn btn-sm btn-outline  hover:bg-[#F739B6]">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    moviedata: PropTypes.object.isRequired
};

export default MovieCard;