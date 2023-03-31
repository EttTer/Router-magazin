import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../movie-database";

const Movie = () => {
  const { movieId } = useParams();
  const movieData = movies.find((mov) => mov.id === movieId);

  return ( <div>
    {
    movies.map((movie)=>{
        return ( <h1>{movie.title}</h1>)
        
    })
  }
   
     
    </div>
  );
};

export default Movie;
