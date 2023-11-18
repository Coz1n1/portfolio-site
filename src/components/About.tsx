import React from "react";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <div className="relative">
        <div className="absolute w-56 -left-4 md:left-4 -top-28">
          <img
            src={require("../assets/about-content.png")}
            alt="about holder"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 2xl:px-60 overflow-hidden bg-slate-800 py-20 gap-8">
          <div className="text-left w-full">
            <span className="text-5xl text-emerald-500 font-bold">
              About me
            </span>
          </div>
          <div className="w-full text-left flex flex-col gap-4">
            <p className="text-zinc-400 text-xl">
              My name is Kacper Tokaj, 21 yo front-end developer based near
              Cracow. I am a second-year computer science student at Cracow
              University of Technology.
            </p>
            <p className="text-zinc-400 text-xl">
              I am passionate about creating real life projects and watching my
              progress day-by-day. I chose this path because of opportunities
              that programming gives to us - building your own stuff and have
              real impact on user-experience and the way that we want to show
              something to others.
            </p>
            <p className="text-zinc-400 text-xl">
              On a personal level I'm disciplined and self-driven to constant
              growth and development. In my free time apart of programming I
              like to play computer games (mainly RPG and FPS genres) and doing
              sports - have been training football since 12 and occassionally
              plays squash. Lords of the Rings and coffee enjoyer.
            </p>
          </div>
          <div className="text-left w-full">
            <span className="text-5xl text-emerald-500 font-bold">
              Techstack
            </span>
          </div>
          <div className="flex flex-row w-full text-left gap-4 flex-wrap">
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl cursor-pointer">
              <BiLogoJavascript size={48} className="text-yellow-500" />
              <span className="font-bold rounded-full">JavaScript</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoTypescript size={48} className="text-blue-500" />
              <span className="font-bold">TypeScript</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoReact size={48} className="text-blue-500" />
              <span className="font-bold">React</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoTailwindCss size={48} className="text-blue-400" />
              <span className="font-bold">Tailwind</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoCss3 size={48} className="text-blue-600" />
              <span className="font-bold">CSS</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <AiFillHtml5 size={48} className="text-orange-700" />
              <span className="font-bold">HTML</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <DiNodejs size={48} className="text-zinc-800" />
              <span className="font-bold">NodeJS</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <SiExpress size={48} className="text-zinc-600" />
              <span className="font-bold">Express</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoPostgresql size={48} className="text-blue-400" />
              <span className="font-bold">PostgreSQL</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center cursor-pointer">
              <BiLogoMongodb size={48} className="text-green-500" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl cursor-pointer">
              <BsGithub size={48} className="text-black" />
              <span className="font-bold">Github</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
