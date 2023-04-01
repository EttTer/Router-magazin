import React from 'react';
import MovieList from '../MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import Movie from '../Movie/Movie';


const Movies=()=>{
    
    return (
    <div className="movies">
    <h1>Movies</h1>

    <div className='movies-container'>
    <div style={{ display: 'flex' }}>

      <nav className ="movie-list">
        <MovieList/>
      </nav>

      <div className="movie">
        <Outlet/>

      </div>

    </div>
  </div>
  </div>)
}



export default Movies

