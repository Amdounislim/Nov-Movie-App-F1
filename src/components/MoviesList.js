import React from "react";
import MovieCard from "./MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index}/>
      ))}
    </div>
  );
};

export default MoviesList;
