import React, { useState } from "react";

import { moviesData } from "./components/MoviesData";
import Main from "./components/Main";

import Header from "./components/Header/Header";

import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [myInput, setMyInput] = useState("");
  const [myRate, setMyRate] = useState(0);
 
  const AddNewMovie=(x)=>{setMovies([...movies, x])}

  return (
    <div className="App">
      <Header setMyInput={setMyInput} myRate={myRate} setMyRate={setMyRate} />
      <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(myInput.toLowerCase().trim()) &&
            el.rating >= myRate
        )}
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;
