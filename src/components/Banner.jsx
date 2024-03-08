import React, { useContext } from "react";
// import bannerImg from "../assets/trybanner.png";
// import profile from "/profile.png";
import me from "../assets/tankbund3.jpg";
import { GlobalContext } from "../context/context";
// import test from "../assets/testme.png";

function Banner() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div className="flex h-[100vh] max-w-6xl justify-center items-center mobile:flex-col mb-10">
      <div className=" w-[50%] items-center justify-center  lg:flex lg:ml-20">
        <img src={me} className=" rounded-lg" alt="" />
      </div>
      <div className="flex w-full justify-center items-center p-10 ">
        <div className="flex flex-col gap-1">
          <span className={` mobile:text-sm md:text-xl lmobile:text-lg`}>
            Hello!{" "}
          </span>
          <h1 className="md:text-5xl mobile:text-xl lmobile:text-3xl">
            I am{" "}
            <span className="text-mypurple font-extrabold ">
              {" "}
              Syed Farazuddin
            </span>
          </h1>
          <p
            className={`${
              darkMode ? "text-mywhite" : "text-mdark"
            }  md:text-xl mobile:text-[16px] mt-1 md:font-bold `}
          >
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
