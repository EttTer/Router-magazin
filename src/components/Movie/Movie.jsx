import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../movie-database";

const Movie = () => {
    
  const { Id } = useParams();

 const movie = movies.find((m) => m.id.toString() === Id.toString());

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster}></img>
      <p> {movie.storyline}</p>
    </div>
  );
}

  
export default Movie;





/*return ( <div>
    {
    movies.map((movie)=>{
        return ( <h1>{movie.title}</h1>)
        
    })
  }
   
      <h3>{movieData.title} ({movieData.id})</h3>
    </div>
  );
};*/