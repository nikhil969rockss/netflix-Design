import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { toggleClose } from "../../utils/MovieBannerSlice";

const VideoBanner = ({ isOpen }) => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movieBanner.movieData);
  const movieDetails = useSelector(store=> store.movieBanner.movieDetailsData )
  console.log(movieDetails);
 

  if (!movieData) return null;



  const { key } = movieData;
 

  return (
    <div
      className={`${
        isOpen ? "scale-100" : "scale-0"
      } transition-all duration-300 w-full h-full bg-[#000000da] top-0 fixed z-20 flex justify-center items-center select-none`}
    >
      <div className="min-w-[280px] max-w-[300px]  min-h-[400px]  md:min-w-[700px] md:max-w-[960px] xl:min-w-[1100px] bg-[#0000008c]">
        <div className="w-full h-full relative p-3 mx-2">
          <ImCross
            className="text-white text-xl cursor-pointer hover:scale-110 absolute right-2 top-3"
            onClick={() => dispatch(toggleClose())}
          />

          {isOpen && (
            <div className="w-full mt-5  overflow-hidden  text-white flex flex-col items-center justify-center ">
              <iframe
                className=" md:aspect-video md:w-[90%]  mr-3 md:mr-0 "
                src={`https://www.youtube.com/embed/${key}?playlist=${key}&loop=1&controls=0&autoplay=1`}
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="px-4 text-center text-3xl  xl:text-5xl xl:mb-5 capitalize mb-2 pt-3 " >{movieDetails?.title}</h2>
              <p className="text-sm px-2  text-center" >{movieDetails.overview}</p>
              <p className="mr-7 md:mr-7 mb-4 md:mb-0 self-end mt-3">Rating: <span className="text-yellow-400">{movieDetails.vote_average.toFixed(1)}</span> </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
