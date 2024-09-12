import React from "react";
import { BROWSER_HEADER_MENU_LIST } from "../../utils/constants";
import { getAuth, signOut } from "firebase/auth";

const NavbarItems = ({ isOpen }) => {
 const auth = getAuth()

  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[160%]"
        } absolute bg-gradient-to-l from-black transition-all right-[-30px] pr-3 duration-500  top-[35px] h-[50vh] mt-[-40px] pt-[60px] xl:hidden md:hidden `}
      >
        {BROWSER_HEADER_MENU_LIST.map((menu) => (
          <p
            className="cursor-pointer mb-2 hover:bg-gradient-to-l from-black   rounded-lg px-[6px] py-[0.5px] select-none   text-white text-right"
            key={menu}
          >
            {menu}
            
          </p>

        ))}
        <button className="bg-red-500 float-right px-2 py-1 rounded-lg text-white active:scale-95 hover:bg-red-600" onClick={()=>signOut(auth)}>sign-out</button>
       
      </div>
    </>
  );
};

export default NavbarItems;
