import React, { useState } from "react";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="fixed w-full bg-white shadow-md font-bold md:px-24">
      <div className="flex flex-row justify-between items-center py-4 px-8">
        <div>
          <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            {`<`}Kacper Tokaj {`/>`}
          </span>
        </div>
        <div className="hidden md:flex flex-row gap-8">
          <NavLink name="About" />
          <NavLink name="Workshop" />
          <NavLink name="Contact" />
        </div>
        <div className="md:hidden flex relative">
          <button
            id="hamburger-button"
            className="cursor-pointer relative w-8 h-8"
            onClick={() => setShowMobile(!showMobile)}
          >
            <div
              className={`absolute w-8 h-1 rounded transition-all duration-500 bg-black before:content-[''] before:w-8 before:h-1 before:rounded before:absolute before:-translate-y-2 before:bg-black before:-translate-x-4 before:transition-all before:duration-500 after:content-[''] after:bg-black after:absolute after:w-8 after:h-1 after:rounded after:-translate-x-4 after:translate-y-2 after:transition-all after:duration-500 ${
                showMobile
                  ? "bg-transparent rotate-[360deg] before:translate-y-0 before:rotate-45 after:-translate-y-0 after:-rotate-45"
                  : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
      <MobileMenu visible={showMobile} />
    </div>
  );
};

export default Navbar;
