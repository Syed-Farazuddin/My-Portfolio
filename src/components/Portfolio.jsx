import React, { useContext, useState } from "react";
// import Skills from "../assets/skills.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p1-2.png";
import p3 from "../assets/p1-3.png";
import p4 from "../assets/p1-4.png";
import movix from "../assets/movix_homepage.png";
import movix1 from "../assets/movix1.png";
import movix2 from "../assets/movix2.png";
import movix3 from "../assets/movix3.png";
import movix4 from "../assets/movix4.png";
import movix5 from "../assets/movix5.png";
import movix6 from "../assets/movix6.png";
import movix7 from "../assets/movix7.png";

import project2Image2 from "../assets/p2.png";
import project2Image1 from "../assets/p2-1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Project3Image1 from "../assets/weatherp3.png";
import Projcet3Image2 from "../assets/weatherp3-1.png";
import { GlobalContext } from "../context/context";
function Portfolio() {
  const project1 = [p1, p2, p3, p4];
  const project2 = [project2Image1, project2Image2];
  const project3 = [Projcet3Image2, Project3Image1];
  const project4 = [
    movix,
    movix1,
    movix2,
    movix3,
    movix4,
    movix5,
    movix6,
    movix7,
  ];

  const [idx, setIdx] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [idx3, setIdx3] = useState(0);
  const [idx4, setIdx4] = useState(0);

  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      id="Portfolio"
      className={` flex mobile:w-full lg:max-w-6xl flex-col p-10 font-sans`}
    >
      <h1
        className={`${
          darkMode ? "text-zinc-100" : "text-dark "
        } lg:text-4xl text-center  font-extrabold font-serif mb-10 mobile:text-3xl`}
      >
        Portfolio
      </h1>
      <div className="flex w-full mobile:flex-col-reverse lg:flex-row mt-10">
        <div className="grid lg:grid-cols-2 gap-10 mobile:grid-cols-1">
          {/* Project 1 */}
          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif`}
            >
              Food Recipie app
            </h1>
            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -left-2 cursor-pointer`}
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else {
                  setIdx((prev) => prev + 1);
                }
              }}
            >
              <FaChevronLeft />
            </p>
            <a href="https://syed-farazuddin.github.io/Food-Recipies/">
              <img
                className="w-full h-full  rounded-lg "
                src={project1[idx]}
                alt=""
              />
            </a>

            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -right-2 cursor-pointer`}
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                } else {
                  setIdx(idx + 1);
                }
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          {/* Project 2 */}
          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } flex justify-center items-center relative mobile:p-2 lg:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1 className="text-white font-bold font-serif">
              To-Do Application
            </h1>
            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -left-2 cursor-pointer`}
              onClick={() => {
                console.log(idx);
                if (idx2 === project2.length - 1) {
                  setIdx2(0);
                } else {
                  setIdx2((prev) => prev + 1);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <a href="https://syed-farazuddin.github.io/react-tasky/">
              <img
                className="w-full h-full rounded-lg"
                src={project2[idx2]}
                alt=""
              />
            </a>

            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -right-2 cursor-pointer`}
              onClick={() => {
                if (idx2 === project2.length - 1) {
                  setIdx2(0);
                } else {
                  setIdx2(idx2 + 1);
                }
              }}
            >
              <FaChevronRight />
            </p>
          </div>

          {/* Project 3 */}
          {/* https://syed-farazuddin.github.io/MERN_WeatherApp/ */}
          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } flex justify-center items-center relative mobile:p-2 lg:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1 className="text-white font-bold font-serif">
              Weather Application
            </h1>
            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -left-2 cursor-pointer`}
              onClick={() => {
                if (idx3 === project3.length - 1) {
                  setIdx3(0);
                } else {
                  setIdx3((prev) => prev + 1);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <a href="https://syed-farazuddin.github.io/MERN_WeatherApp/">
              <img
                className="w-full h-full  rounded-lg"
                src={project3[idx3]}
                alt=""
              />
            </a>

            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -right-2 cursor-pointer`}
              onClick={() => {
                if (idx3 === project3.length - 1) {
                  setIdx3(0);
                } else {
                  setIdx3(idx3 + 1);
                }
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          {/* Project 4 */}
          <div
            className={`${
              darkMode ? "bg-customblue text-white" : "bg-slight"
            } mobile:p-2 flex justify-center items-center relative md:p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1`}
          >
            <h1
              className={`${
                darkMode ? " text-white " : "text-dark"
              } font-bold font-serif`}
            >
              Movix
            </h1>
            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -left-2 cursor-pointer`}
              onClick={() => {
                if (idx4 === project4.length - 1) {
                  setIdx4(0);
                } else {
                  setIdx4((prev) => prev + 1);
                }
              }}
            >
              <FaChevronLeft />
            </p>
            <a href="https://syed-farazuddin.github.io/Food-Recipies/">
              <img
                className="w-full h-full  rounded-lg "
                src={project4[idx4]}
                alt=""
              />
            </a>

            <p
              className={`${
                darkMode ? "bg-dark text-white" : "bg-white text-black"
              } mobile:p-1 lg:p-2 rounded-full absolute -right-2 cursor-pointer`}
              onClick={() => {
                if (idx4 === project4.length - 1) {
                  setIdx4(0);
                } else {
                  setIdx4(idx4 + 1);
                }
              }}
            >
              <FaChevronRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
