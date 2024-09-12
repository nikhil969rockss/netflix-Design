import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Sidebar = ({ title, desc }) => {
  return (
    <div className="transition-bg hover:scale-105 hover:pl-24 duration-700 hover:bg-gradient-to-r from-black  text-white p-4 mt-[-100px] pt-[100px] relative w-screen min-h-[100vh] pl-10 ">
      <div className="mt-[10%]">
        <h2 className="text-7xl font-[900] mb-3 ">{title}</h2>
        <p className=" mt-6 mb-3 w-[35%]">{desc}</p>
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
