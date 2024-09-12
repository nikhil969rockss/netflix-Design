import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { BROWSER_HEADER_MENU_LIST } from "../utils/constants";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";

const BrowseHeader = () => {
  const auth = getAuth();
  const navigate = useNavigate;

  const user = useSelector(store => store.user)

  function signOutButton() {
    signOut(auth)
      .then(() => {
        //signOut successfully
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <div className="h-16 bg-gradient-to-b from-black  flex items-center gap-7 justify-between relative z-[1]">
      <div className="h-full pl-4 flex gap-4 items-center">
        <img className="h-full" src={NETFLIX_LOGO} alt="Netflix Logo" />
        <menu className="flex gap-5">
          {BROWSER_HEADER_MENU_LIST.map((menu, index) => (
            <li key={index} className="text-white cursor-pointer text-sm">
              {menu}
            </li>
          ))}
        </menu>
      </div>
      <div className="mr-7 flex gap-3 items-center">
      <IoMdNotifications className="text-3xl text-[#ddd] cursor-pointer" />

        <img className="h-8" src={user?.photoURL} alt="" />

        <button className="text-white" onClick={signOutButton}>signout</button>
      </div>
    </div>
  );
};

export default BrowseHeader;
