import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Sidebar = ({ title, desc }) => {
  return (
    <div className="transition-all  xl:hover:scale-105 md:hover:scale-105 xl:hover:pl-24 md:hover:pl-16 duration-700 xl:hover:bg-gradient-to-r md:hover:bg-gradient-to-r from-black text-white p-4  mt-[-70px] relative w-screen min-h-[100vh] xl:pl-10 ">
      <div className=" absolute xl:top-[50%] md:top-[50%] top-[60%] -translate-y-1/2">
        <h2 className="p-2 mt-24 text-4xl md:text-5xl  xl:text-7xl font-[900] xl:mb-3 md:mb-[-20px] ">{title}</h2>
        <p className=" xl:mt-6 md:mt-6  mb-3 xl:w-[35%] md:w-[35%] p-2 pr-5">{desc}</p>
       <div className="flex transition-all">
       <button className="bg-[hsl(0,0%,99%)] hover:bg-[hsl(0,0%,89%)] hover:scale-105 px-9 py-3 rounded-lg mr-3 text-black flex items-center cursor-pointer ">
          <IoIosPlay className="text-xl" /> Play Now
        </button>
        <button className="bg-[hsl(0,0%,37%)] hover:bg-[hsl(0,0%, 30%)] hover:scale-105 px-9 py-3 rounded-lg flex items-center gap-1">
          {" "}
          <IoMdInformationCircleOutline /> More info
        </button>
       </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
