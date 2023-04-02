import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../movie-database";
import "./Movie.css";

const Movie = () => {
  const { Id } = useParams();

  const movie = movies.find((m) => m.id.toString() === Id.toString());

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.poster}></img>
      <p> {movie.storyline}</p>
      <p style={{textDecoration:"underline"
      }}> Director: {movie.director}</p>
      <p> Movie Genre: {movie.genre}</p>
      <p> Year: {movie.year}</p>
    </div>
  );
};

export default Movie;

