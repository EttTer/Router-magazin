import React from 'react';
import MovieList from '../MovieList/MovieList';
import { Outlet } from 'react-router-dom';


const Movies=()=>{
    return (<><h1>Movies</h1>
    <MovieList/>
    <Outlet/></>)
}

export default Movies