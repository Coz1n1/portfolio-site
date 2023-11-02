import React from "react";
import { MdWavingHand } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full flex flex-col items-center justify-center bg-emerald-500 text-white py-16 gap-4">
        <span className="font-bold text-5xl">CONTACT</span>
        <span className="text-2xl flex gap-2">
          Are you interested in cooperation? Contact me
          <MdWavingHand size={36} className="text-yellow-300" />
        </span>
        <a href="mailto:kacpertokajj@gmail.com" target="#blank">
          <span className="flex text-slate-800 items-center justify-center gap-2 text-xl font-bold cursor-pointer">
            <AiOutlineMail size={36} className="text-slate-800" />
            kacpertokajj@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
