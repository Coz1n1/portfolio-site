import React, { FC } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  name: string;
  navigateTo: string;
}

const NavLink: FC<NavLinkProps> = ({ name, navigateTo }) => {
  return (
    <Link
      className="w-full flex flex-1 items-center justify-center"
      to={navigateTo}
      spy={true}
      smooth={true}
      duration={700}
    >
      <span className="text-lg font-bold cursor-pointer">{name}</span>
    </Link>
  );
};

export default NavLink;
