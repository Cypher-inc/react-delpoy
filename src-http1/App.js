import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-http1-59f2d-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // console.log(data);

      const newMoviesArr = [];

      // console.log(newMoviesArr);

      for (const key in data) {
        // console.log(key);
        // newMoviesArr.slice(1);

        newMoviesArr.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      console.log(newMoviesArr.splice(1, 4));
      const newMoviesArr1 = newMoviesArr.splice(5);

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // test()
      setMovies(newMoviesArr1);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  //fetch is also use to POST DATA
  async function addMovieHandler(movie1) {
    // console.log(movie);
    const response = await fetch(
      "https://react-http1-59f2d-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie1),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchMoviesHandler()
    const data = await response.json();
    // console.log(data);
  }

  const content =
    movies.length > 0 ? (
      <MoviesList movies={movies} />
    ) : error ? (
      <p>{error}</p>
    ) : isLoading ? (
      <h1>⏳</h1>
    ) : (
      <h1>No movies found.</h1>
    );

  const test = () => {
    console.log("testing..");
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie
          onAddMovie={addMovieHandler}
          onFetchProp={fetchMoviesHandler}
          // onTestProp={test}
        />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
