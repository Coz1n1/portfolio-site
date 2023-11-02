import React from "react";
import Projects from "../projectsData.json";
import Project from "./Project";

const Workshop = () => {
  return (
    <section id="workshop">
      <div className="w-screen flex flex-col items-center justify-center py-24 px-4 xl:px-12 gap-12 lg:gap-24">
        <span className="text-5xl font-bold text-emerald-500">Workshop</span>
        {Projects.map((project, i) => (
          <Project data={project} key={i} />
        ))}
        <div className="flex flex-col gap-4 w-full items-center">
          <span className="text-xl font-bold text-slate-800">
            Want to see more of my projects?
          </span>
          <a href="https://github.com/Coz1n1" target="#blank">
            <button className="border-2 border-slate-800 py-2 px-4 font-bold text-lg animate-bounce">
              Click here
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
