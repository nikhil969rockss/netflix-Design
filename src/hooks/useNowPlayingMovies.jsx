import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addMovie} from "../utils/NowPlayingMoviesSlice"
import { MOVIE_url, options, VideoDetails } from '../utils/constants';

const useNowPlayingMovies = () => {
  const [videoKey, setVideoKey] = useState("");
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovie);
  useEffect(() => {
    getMoviesData();

    videoBanner()
  }, [videoKey]);

  async function getMoviesData() {
    const response = await fetch(MOVIE_url, options);
    const json = await response.json();

    dispatch(addMovie(json.results));
  }
  const bannerVideoId = nowPlayingMovies?.[VideoDetails].id;
  async function videoBanner() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${bannerVideoId}/videos`,
      options
    );
    const json = await response.json();
      if(json){

    setVideoKey(json?.results?.filter((item) => item.type === "Trailer")[0].key);}
  }
  return {nowPlayingMovies , videoKey};
  
}


export default useNowPlayingMovies