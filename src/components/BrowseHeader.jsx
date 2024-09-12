import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { BROWSER_HEADER_MENU_LIST } from "../utils/constants";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarItems from "./NavbarHamburgerMenu/NavbarItems";
import { closeNavbar, toggleNavbar } from "../utils/NavbarSlice";
import { IoMdClose } from "react-icons/io";

const BrowseHeader = () => {
  const auth = getAuth();
  const navigate = useNavigate;
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isOpen = useSelector((store) => store.navbar.isExpanded);

  function handleToggleMenu() {
    dispatch(toggleNavbar());
  }
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
        {isOpen && (
          <div
            className=" left-0 absolute z-40 w-[78%] h-[220vh]"
            onClick={() => dispatch(closeNavbar())}
          ></div>
        )}
        <img className="h-full" src={NETFLIX_LOGO} alt="Netflix Logo" />
        <menu className="xl:flex md:flex gap-5 hidden">
          {BROWSER_HEADER_MENU_LIST.map((menu, index) => (
            <li key={index} className="text-white cursor-pointer text-sm">
              {menu}
            </li>
          ))}
        </menu>
      </div>
      <div className="mr-7 flex gap-3 items-center relative">
        <IoMdNotifications className="text-3xl text-[#ddd] cursor-pointer" />

        <img className="h-8" src={user?.photoURL} alt="" />
        {!isOpen ? (
          <RxHamburgerMenu
            onClick={handleToggleMenu}
            className="text-white text-2xl cursor-pointer xl:hidden md:hidden relative z-20"
          />
        ) : (
          <IoMdClose
            className="text-white text-2xl cursor-pointer xl:hidden md:hidden relative z-20"
            onClick={handleToggleMenu}
          />
        )}
        <NavbarItems isOpen={isOpen} />
        {/* <button className="text-white" onClick={signOutButton}>signout</button> */}
      </div>
    </div>
  );
};

export default BrowseHeader;
