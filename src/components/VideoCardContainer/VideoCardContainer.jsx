import React from "react";

const VideoCardContainer = ({ Movies ,title ,onclick }) => {
  if(!Movies) return //  early return
  return (
    <div className="relative z-10 p-4 ">
      <div className="xl:mt-[-100px] md:mt-[-15%] mt-[-20%]  mb-[17%] xl:mb-[110px]">
        <h1 className="text-white text-2xl  mb-3 font-extrabold">
          {title}
        </h1>
        <div className="overflow-x-auto movies-slider-container ">
          <div className="flex gap-2">
            {Movies?.map((movie) => (
              <img
                className="h-48 aspect-auto cursor-pointer hover:scale-110 transition-all duration-500"
                src={`https://image.tmdb.org/t/p/w780${movie?.poster_path}`}
                alt=""
                onClick={()=>onclick(movie.id, movie)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardContainer;
