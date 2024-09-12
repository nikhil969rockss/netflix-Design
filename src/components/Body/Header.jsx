import React from "react";
import { NETFLIX_LOGO } from "../../utils/constants";
import { NETFLIX_BACKGROUND_COVER } from "../../utils/constants";



const Header = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed z-[-1] bg-gradient-to-b from-black to-black ">
        <img
          className="opacity-50 object-cover min-h-[100vh] w-full "
          src={NETFLIX_BACKGROUND_COVER}
          alt="background-image"
        />
      </div>
      <div className="xl:h-24 xl:pl-40 bg-gradient-to-b from-black md:h-16 h-12">
        <img
          className="h-full "
          src={NETFLIX_LOGO}   alt="Netflix-logo"
        />
      </div>
      
    </div>
  );
};

export default Header;
