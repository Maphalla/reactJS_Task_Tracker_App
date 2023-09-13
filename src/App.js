import { useState, useEffect } from "react";
import React from "react";
import Movie from "./Components/Movie";
import "./index";
import SearchIcon from "./search.svg";

// api_key :  b88d26e

const API_URL = "http://www.omdbapi.com?apikey=b88d26e";

// const movie1 ={
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Tee Movie's</h1>

      <div className="search">
        <input
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          placeholder="search for a movie"
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchMovie)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found!!!!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
