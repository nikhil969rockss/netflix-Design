import { useEffect, useState } from "react";
import BrowseHeader from "../components/BrowseHeader";
import Sidebar from "../components/BrowsePageSideBar/Sidebar";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import VideoCardContainer from "../components/VideoCardContainer/VideoCardContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useFetchMovieData from "../hooks/useFetchMovieDatajsx";

const Browse = () => {
  const { nowPlayingMovies, videoKey } = useNowPlayingMovies();

  const popularMovies = useFetchMovieData("https://api.themoviedb.org/3/movie/popular")


  const topRatedMovies = useFetchMovieData("https://api.themoviedb.org/3/movie/top_rated")

  const upComingMovies = useFetchMovieData("https://api.themoviedb.org/3/movie/upcoming")

  return (
    <div className="relative overflow-hidden">
      <BrowseHeader />
      <Sidebar
        title={nowPlayingMovies?.[4].original_title}
        desc={nowPlayingMovies?.[4].overview}
      />
      {videoKey&&<VideoContainer videoId={videoKey} />}
      <section className="bg-black">
      <VideoCardContainer Movies = {nowPlayingMovies} title={"Now Playing"}/>
      <VideoCardContainer Movies = {popularMovies} title={"Popular"}/>
      <VideoCardContainer Movies = {topRatedMovies} title={"Top Rated"}/>
      <VideoCardContainer Movies = {upComingMovies} title={"UpComing Movies"}/>
     
     

      </section>
     
    </div>
  );
};

export default Browse;
