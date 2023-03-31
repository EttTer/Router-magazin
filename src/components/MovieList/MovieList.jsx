import React from 'react';
import { Link } from 'react-router-dom';
import {movies} from "../../movie-database"


const MovieList=()=>{
    return (<><h1>MovieList</h1>
    {movies.map((movie)=>(
        <Link 
        style={{ display: 'block', margin: '1rem 0' }}
        to={`movies/${movie.id}`}
    key={movie.id}>
        {movie.title}
    </Link>
    ))
     
    }</>)
}

export default MovieList


