import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useFetchMovieData = (url) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
   
    getMoviesData();
  }, []);

  async function getMoviesData() {
    if(movies) return null
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.log(error);
    }
  }

  return movies ;
};

export default useFetchMovieData;
