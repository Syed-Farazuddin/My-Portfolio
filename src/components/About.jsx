import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
// import Skill from "../assets/skills.png";

function About() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      className={`flex mobile:w-full lg:max-w-6xl flex-col ${
        darkMode ? "bg-dark " : "bg-light "
      } p-10 lg:h-[100vh] font-sans mt-5 flex justify-center items-center flex-col`}
      id="Skills"
    >
      <h1
        className={`${
          darkMode ? "text-zinc-100" : "text-dark"
        } lg:text-4xl text-center  font-extrabold font-serif mb-5 mobile:text-3xl`}
      >
        About
      </h1>
      <div className="grid mobile:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mobile:gap-4 md:gap-8 w-full mt-10 ml-[25%] mr-[25%] ">
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          Birth : May 24, 2003
        </div>
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          Age : 20
        </div>
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          Degree : Bachelor of Engineering
        </div>
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          Email : syedfaraz2405@gmail.com
        </div>
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          City : Hyderabad
        </div>
        <div
          className={`font-semibold font-mono text-lg border-b-[2px]  w-auto py-2 ${
            darkMode
              ? "text-zinc-300 border-zinc-300"
              : "text-slate-600 border-slate-600"
          } `}
        >
          Nationality : Indian
        </div>
      </div>
    </div>
  );
}

export default About;
