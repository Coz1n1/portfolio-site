import React, { FC } from "react";
import NavLink from "./NavLink";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible }) => {
  // if (!visible) {
  //   return null;
  // }

  return (
    <div
      className={`text-2xl absolute w-screen h-[calc(100vh-64px)] flex flex-col top-16 bg-white border-2 px-8 justify-between py-2 rounded-md transition-all duration-500 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <NavLink name="About" />
      <NavLink name="Workshop" />
      <NavLink name="Contact" />
    </div>
  );
};

export default MobileMenu;
