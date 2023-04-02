import React from "react";
import MovieList from "../MovieList/MovieList";
import { Outlet } from "react-router-dom";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movie</h1>

      <div className="movies-container">
      <div className="movies-left-column" style={{ display: "flex" }}>
          <nav className="movie-list">
            <MovieList />
          </nav>

          <div className="movie-box">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
