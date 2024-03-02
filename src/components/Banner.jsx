import React from "react";
import bannerImg from "../assets/trybanner.png";
import profile from "../assets/profile.png";

import test from "../assets/testme.png";

function Banner() {
  return (
    <div className="flex h-[100vh] max-w-6xl">
      <div className=" w-[50%] items-center justify-center mobile:hidden lg:flex">
        <img src={profile} alt="" />
      </div>
      <div className="flex w-full justify-center items-center p-10 ">
        <div className="flex flex-col gap-1">
          <span className="mobile:text-sm md:text-xl">Hello! </span>
          <h1 className="md:text-5xl mobile:text-xl">
            I am{" "}
            <span className="text-mypurple font-extrabold">
              {" "}
              Syed Farazuddin
            </span>
          </h1>
          <p className="text-mywhite md:text-xl mobile:text-sm mt-2 md:font-bold">
            <span>MERN DEVELOPER</span>{" "}
            <span className="mobile:hidden md:inline-block">
              / JAVA DEVELOPER{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
