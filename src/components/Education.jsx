import React, { useContext } from "react";
import edu from "../assets/edu.png";
import { SlCalender } from "react-icons/sl";
import { GlobalContext } from "../context/context";

function Education() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? "  bg-sdark " : "bg-mlight"
      } flex mobile:w-full lg:max-w-6xl flex-col p-10 font-sans`}
    >
      <h1
        className={`${
          darkMode ? " text-zinc-100 " : "text-dark "
        } text-5xl text-center font-extrabold font-serif mb-5 mobile:text-3xl`}
      >
        Education
      </h1>
      <div className="flex w-full mobile:flex-col-reverse lg:flex-row justify-center items-center">
        <div className="flex items-start gap-10 justify-center sm:px-10 flex-col w-full">
          <div className="flex flex-col gap-1">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2020-2024
            </p>
            <h1
              className={`md:text-2xl mobile:text-lg font-body font-bold ${
                darkMode ? " text-sky-300" : "text-sdark"
              }`}
            >
              Bachelor Of Engineering In Computers Science
            </h1>
            <p
              className={`${
                darkMode ? "text-zinc-300" : "text-slate-600"
              }  mobile:text-sm md:text-lg`}
            >
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Repudiandae, nemo.
            </p>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2018-2020
            </p>
            <h1
              className={`md:text-2xl mobile:text-lg font-body font-bold ${
                darkMode ? " text-sky-300" : "text-sdark"
              }`}
            >
              Intermediate(TSBIE) - MPC
            </h1>
            <p
              className={`${
                darkMode ? "text-zinc-300" : "text-slate-600"
              }  mobile:text-sm md:text-lg`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              voluptate dolore cupiditate illum, libero explicabo.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2016-2018
            </p>
            <h1
              className={`md:text-2xl mobile:text-lg font-body font-bold ${
                darkMode ? " text-sky-300" : "text-sdark"
              }`}
            >
              Schooling - SSC
            </h1>
            <p
              className={`${
                darkMode ? "text-zinc-300" : "text-slate-600"
              }  mobile:text-sm md:text-lg`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus soluta? Id, maiores minima! Cumque.
            </p>
          </div>
        </div>
        <div className="flex sm:w-[80%] items-center justify-center lg:block mobile:w-full mobile:flex-col-reverse">
          <img src={edu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
