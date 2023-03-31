import React from "react";
import { Link } from "react-router-dom";

const Menu =()=>{
    return (<><h1>Menu</h1>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/movies">Movies</Link>
      </nav></>)
}

export default Menu