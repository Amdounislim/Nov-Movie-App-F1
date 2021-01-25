import React from 'react'
import AddMovie from './AddMovie/AddMovie';
import MoviesList from "./MoviesList";

const Main = ({movies}) => {
    return (
        <div>
            <MoviesList movies={movies}/>
            <AddMovie />
        </div>
    )
}

export default Main
