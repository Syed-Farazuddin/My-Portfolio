import React, { useState } from "react";
import Skills from "../assets/skills.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p1-2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Portfolio() {
  const project1 = [p1, p2];
  const [idx, setIdx] = useState(0);
  const [image, setImage] = useState(project1[idx]);
  return (
    <div className="flex mobile:w-full lg:max-w-6xl flex-col bg-sdark p-10 font-sans">
      <h1 className="text-5xl text-center text-zinc-100 font-extrabold font-serif mb-5 mobile:text-3xl">
        Portfolio
      </h1>
      <div className="flex w-full mobile:flex-col-reverse lg:flex-row">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center relative p-5 shadow-lg bg-customblue hover:shadow-2xl rounded-lg flex-col gap-1">
            <h1 className="text-white font-bold font-serif">
              Food Recipie app
            </h1>
            <p
              className="bg-dark text-white p-2 rounded-full absolute left-1 cursor-pointer"
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else if (idx === 0) {
                  console.log("idx is 0");
                  setIdx((prev) => prev + 1);
                } else {
                  setIdx((prev) => prev++);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <a href="https://syed-farazuddin.github.io/Food-Recipies/">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={project1[idx]}
                alt=""
              />
            </a>

            <p
              className="text-white bg-dark p-2 rounded-full absolute right-1 cursor-pointer"
              onClick={() => {
                // setRight();
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <p
              className="bg-dark text-white p-2 rounded-full absolute left-1 cursor-pointer"
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else if (idx === 0) {
                  console.log("idx is 0");
                  setIdx((prev) => prev + 1);
                } else {
                  setIdx((prev) => prev++);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <img
              className="w-full h-full object-contain"
              src={project1[idx]}
              alt=""
            />
            <p
              className="text-white bg-dark p-2 rounded-full absolute right-1 cursor-pointer"
              onClick={() => {
                // setRight();
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <p
              className="bg-dark text-white p-2 rounded-full absolute left-1 cursor-pointer"
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else if (idx === 0) {
                  console.log("idx is 0");
                  setIdx((prev) => prev + 1);
                } else {
                  setIdx((prev) => prev++);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <img
              className="w-full h-full object-contain"
              src={project1[idx]}
              alt=""
            />
            <p
              className="text-white bg-dark p-2 rounded-full absolute right-1 cursor-pointer"
              onClick={() => {
                // setRight();
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <p
              className="bg-dark text-white p-2 rounded-full absolute left-1 cursor-pointer"
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else if (idx === 0) {
                  console.log("idx is 0");
                  setIdx((prev) => prev + 1);
                } else {
                  setIdx((prev) => prev++);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <img
              className="w-full h-full object-contain"
              src={project1[idx]}
              alt=""
            />
            <p
              className="text-white bg-dark p-2 rounded-full absolute right-1 cursor-pointer"
              onClick={() => {
                // setRight();
              }}
            >
              <FaChevronRight />
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <p
              className="bg-dark text-white p-2 rounded-full absolute left-1 cursor-pointer"
              onClick={() => {
                if (idx === project1.length - 1) {
                  setIdx(0);
                  console.log("idx is ", project1.length - 1);
                } else if (idx === 0) {
                  console.log("idx is 0");
                  setIdx((prev) => prev + 1);
                } else {
                  setIdx((prev) => prev++);
                }
              }}
            >
              {" "}
              <FaChevronLeft />
            </p>
            <img
              className="w-full h-full object-contain"
              src={project1[idx]}
              alt=""
            />
            <p
              className="text-white bg-dark p-2 rounded-full absolute right-1 cursor-pointer"
              onClick={() => {
                // setRight();
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
