import React from 'react';
import MovieCard from './Card';


const MoviesList = ({movies = [],onAddMovie = () => {} }) => (
    
        <div className="movies-list">
            {
            movies.map((el,i)=> <MovieCard key={el.id} movie={el}/>)
            }
        
        <div className="add-movie" 
            onClick={()=> {
                onAddMovie({
                    id: Math.random(),
                    rating: Number(prompt('movie rating: ')),
                    name: prompt('movie name: '),
                    year: Number(prompt('movie year: ')),
                    
                  

                })

            }}>
            
            
            <p>+</p></div>
        </div>
    )

export default MoviesList;
