import React from "react";
import edu from "../assets/edu.png";
import { SlCalender } from "react-icons/sl";

function Education() {
  return (
    <div className="flex mobile:w-full lg:max-w-6xl flex-col bg-sdark p-10 lg:h-[100vh] font-sans">
      <h1 className="text-5xl text-center text-zinc-100 font-extrabold font-serif mb-5 mobile:text-3xl">
        Education
      </h1>
      <div className="flex w-full mobile:flex-col-reverse lg:flex-row">
        <div className="flex items-start gap-10 justify-center sm:px-10 flex-col w-full">
          <div className="flex flex-col gap-1">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2020-2024
            </p>
            <h1 className="md:text-2xl mobile:text-lg font-body font-bold text-sky-300">
              Bachelor Of Engineering In Computers Science
            </h1>
            <p className="text-zinc-300 mobile:text-sm md:text-lg">
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Repudiandae, nemo.
            </p>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2018-2020
            </p>
            <h1 className="md:text-2xl font-body font-bold text-sky-300 mobile:text-lg">
              Intermediate(TSBIE) - MPC
            </h1>
            <p className="text-zinc-300 mobile:text-sm md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              voluptate dolore cupiditate illum, libero explicabo.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sans flex justify-start items-center gap-2">
              <SlCalender />
              2016-2018
            </p>
            <h1 className="md:text-2xl  font-body font-bold text-sky-300 mobile:text-lg">
              Schooling - SSC
            </h1>
            <p className="text-zinc-300 mobile:text-sm md:text-lg">
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
