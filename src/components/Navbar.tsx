import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Y_OFFSET = 70;

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= Y_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-40 fixed w-screen transition duration-700 ${
        showBackground ? "bg-white" : "bg-white/0 py-4"
      } shadow-md font-bold px-0 md:px-4 lg:px-20`}
    >
      <div className="flex flex-row justify-between items-center py-4 px-4 md:px-8">
        <div>
          <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            {`<`}Kacper Tokaj {`/>`}
          </span>
        </div>
        <div className="hidden md:flex flex-row gap-8">
          <NavLink name="Home" navigateTo="home" />
          <NavLink name="About" navigateTo="about" />
          <NavLink name="Workshop" navigateTo="workshop" />
          <NavLink name="Contact" navigateTo="contact" />
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
