import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import webDev from "../assets/certificate_webdev.jpg";
import reactCer from "../assets/react-certificate.png";
import CSS from "../assets/CSS-JS.png";
import suven from "../assets/intern-suven.png";
function Certificates() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      id="Certificates"
      className={` flex mobile:w-full lg:max-w-6xl flex-col p-10 font-sans`}
    >
      <h1
        className={`${
          darkMode ? "text-zinc-100" : "text-dark "
        } lg:text-4xl text-center  font-extrabold font-serif mb-10 mobile:text-3xl`}
      >
        Certificates
      </h1>
      <div className="flex w-full mobile:flex-col-reverse lg:flex-row mt-10">
        <div className="grid lg:grid-cols-2 gap-10 mobile:grid-cols-1">
          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif text-center`}
            >
              Full Stack Web Development
            </h1>

            <img className="w-full h-full  rounded-lg " src={webDev} alt="" />
          </div>

          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif text-center`}
            >
              React
            </h1>

            <img className="w-full h-full  rounded-lg " src={reactCer} alt="" />
          </div>

          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif text-center`}
            >
              CSS and Javascript
            </h1>

            <img className="w-full h-full  rounded-lg " src={CSS} alt="" />
          </div>

          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif text-center`}
            >
              Internship at Suven Technologies
            </h1>

            <img className="w-full h-full  rounded-lg " src={suven} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
