import BrowseHeader from "../components/BrowseHeader";
import Sidebar from "../components/BrowsePageSideBar/Sidebar";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import VideoCardContainer from "../components/VideoCardContainer/VideoCardContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useFetchMovieData from "../hooks/useFetchMovieDetails.jsx";
import { options, VideoDetails } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import VideoBanner from "../components/OverlayVideoBanner/VideoBanner";

import { addMovieData, addMovieDetails, toggleOpen } from "../utils/MovieBannerSlice.js";

const Browse = () => {
  const openBanner = useSelector((store) => store.movieBanner.isOpen);
  const movieBannerData = useSelector((store) => store.movieBanner.movieData);
  const dispatch = useDispatch();

  const { nowPlayingMovies, videoKey } = useNowPlayingMovies();

  const popularMovies = useFetchMovieData(
    "https://api.themoviedb.org/3/movie/popular"
  );

  const topRatedMovies = useFetchMovieData(
    "https://api.themoviedb.org/3/movie/top_rated"
  );

  const upComingMovies = useFetchMovieData(
    "https://api.themoviedb.org/3/movie/upcoming"
  );

  function handleMovieCardClick(id,movieData) {
    console.log(id);

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          addMovieData(
            data?.results.filter((movie) => movie?.type === "Trailer")[0]
          )
        );
       
        dispatch(toggleOpen())
        dispatch(addMovieDetails(movieData))
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="relative overflow-hidden ">
      <BrowseHeader />
      <Sidebar
        title={nowPlayingMovies?.[VideoDetails].original_title}
        desc={nowPlayingMovies?.[VideoDetails].overview}
      />
      {videoKey && <VideoContainer videoId={videoKey} />}

      <section className="bg-black relative">
        <VideoBanner isOpen={openBanner}  />

        <VideoCardContainer
          Movies={nowPlayingMovies}
          title={"Now Playing"}
          onclick={handleMovieCardClick}
        />
        <VideoCardContainer
          Movies={popularMovies}
          title={"Popular"}
          onclick={handleMovieCardClick}
        />
        <VideoCardContainer
          Movies={topRatedMovies}
          title={"Top Rated"}
          onclick={handleMovieCardClick}
        />
        <VideoCardContainer
          Movies={upComingMovies}
          title={"UpComing Movies"}
          onclick={handleMovieCardClick}
        />
      </section>
    </div>
  );
};

export default Browse;
