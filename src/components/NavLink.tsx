import React, { FC } from "react";

interface NavLinkProps {
  name: string;
}

const NavLink: FC<NavLinkProps> = ({ name }) => {
  return (
    <div className="w-full flex flex-1 items-center justify-center">
      <span className="text-md font-bold cursor-pointer">{name}</span>
    </div>
  );
};

export default NavLink;
