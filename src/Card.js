import React from 'react';
import Rating from './Rating';

const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        name = '',
        year = '',
        image= '',
        rating = 0
    } = movie
    return (
        <div className='movie-card-container'>
            <div className='movieRating'>
                <p> <Rating count={rating}/></p>
            </div>
            
            <img className="logo" src={image} alt="movie image" />
            
            <div className='movieDescription'>
                <span>{name}</span> -
                <span> {year}</span>
                
            </div>
        </div>
    )
}
 
export default MovieCard ;