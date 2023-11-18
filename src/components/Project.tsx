import React, { FC, useState, useEffect, useRef } from "react";
import { ProjectType } from "../types";
import { useInView } from "framer-motion";

interface ProjectProps {
  data: ProjectType;
}

const Project: FC<ProjectProps> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === data.imgs.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      console.log(currentIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, data.imgs.length]);

  return (
    <div
      className="flex lg:flex-row flex-col items-center justify-center gap-4 xl:gap-8 py-2 px-2 mx-2"
      ref={ref}
    >
      <div
        className={`flex flex-col lg:w-[430px] xl:w-[420px] ${
          isInView
            ? "transition-all duration-500 translate-x-0 opacity-100"
            : "-translate-x-[500px] opacity-0"
        }`}
      >
        <span className="text-slate-800 font-extrabold text-3xl mb-2">
          {data.title}
        </span>
        <span className="text-zinc-500 text-lg mb-2">{data.description}</span>
        <span className="mb-2 text-slate-800 font-bold">{data.bonusInfo}</span>
        <div className="flex flex-row flex-wrap gap-4 mb-6">
          {data.technologies.map((tech) => (
            <span className="font-bold bg-slate-800 text-white px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <a href={data.live} target="#blank">
            <button className=" bg-emerald-500 text-white py-2 px-4 font-bold transition-all duration-200 hover:scale-125 hover:rotate-6 rounded-md">
              See live
            </button>
          </a>
          <a href={data.github} target="#blank">
            <button className="py-2 px-4 font-bold transition-all duration-200 hover:scale-125 text-emerald-500 hover:rotate-6">
              {"<Code />"}
            </button>
          </a>
        </div>
      </div>
      <div
        className={`lg:w-[680px] xl:w-[800px] flex items-center justify-center h-full cursor-pointer ${
          isInView
            ? "transition-all duration-500 translate-x-0 opacity-100"
            : "translate-x-[500px] opacity-0"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center py-4">
          <a href={data.live} target="#blank">
            <img
              src={data.imgs[currentIndex]}
              alt=""
              className="w-full rounded-lg transition-all shadow-lg shadow-zinc-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
