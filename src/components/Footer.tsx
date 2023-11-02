import React from "react";
import { BsFillArrowUpCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center py-16 bg-slate-800 gap-4">
      <span className="text-white cursor-pointer animate-bounce">
        <Link to={"home"} spy={true} smooth={true} duration={700}>
          <BsFillArrowUpCircleFill size={36} />
        </Link>
      </span>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/kacper-tokaj/" target="#blank">
          <BsLinkedin className="text-blue-500 cursor-pointer text-4xl" />
        </a>
        <a href="https://github.com/Coz1n1" target="#blank">
          <BsGithub className="cursor-pointer text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
