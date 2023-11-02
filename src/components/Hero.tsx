import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="home">
      <div
        ref={ref}
        className="w-screen h-screen mb-16 flex flex-col items-center justify-center"
      >
        <div
          className={`flex items-center justify-center pt-24 w-full ${
            isInView
              ? "transition-all duration-500 translate-x-0 opacity-100"
              : "translate-x-[500px] opacity-0"
          }`}
        >
          <div className="w-64 lg:w-80 animate-liquid">
            <img
              src={require("../assets/pracuj.jpg")}
              alt="profile"
              className="object-cover rounded-lg border-2 border-emerald-500 animate-liquid"
            />
          </div>
        </div>
        <div
          className={`w-full py-8 flex flex-col items-center justify-center mx-auto gap-2 ${
            isInView
              ? "transition-all duration-500 translate-x-0 opacity-100"
              : "-translate-x-[500px] opacity-0"
          }`}
        >
          <div className="w-full text-center">
            <span className="text-3xl md:text-5xl font-bold">
              Hi, I'm Kacper
            </span>
          </div>
          <div className="w-full text-center">
            <span className="text-4xl md:text-6xl font-bold text-emerald-500">
              Frontend Developer
            </span>
          </div>
          <div className="text-center w-auto max-w-[700px] px-2">
            <p className="text-xl md:text-2xl text-zinc-700">
              Trying to implement ideas into life. Love to learn and make my
              projects with nice functionality and good user experience.
            </p>
          </div>
          <div className="flex items-center justify-center w-full lg:px-20 gap-8">
            <a
              href="https://www.linkedin.com/in/kacper-tokaj/"
              className="flex items-center gap-2"
              target="#blank"
            >
              <span className="font-bold text-md">LINKEDIN</span>
              <BsLinkedin className="text-blue-500 cursor-pointer text-4xl" />
            </a>
            <a
              href="https://github.com/Coz1n1"
              className="flex items-center gap-2"
              target="#blank"
            >
              <span className="font-bold text-md">GITHUB</span>
              <BsGithub className="cursor-pointer text-4xl" />
            </a>
          </div>
          <div className="mt-4 text-center w-full">
            <a href="#about">
              <button className="px-4 py-2 bg-inherit border-2 border-sky-500 rounded-lg scale-100 text-xl font-extrabold transition-all duration-200 hover:bg-sky-500 hover:scale-125 hover:text-white hover:rotate-6">
                Know More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
