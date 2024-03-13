import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { GlobalContext } from "../context/context";

function Nav() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? " bg-slate-900 " : "bg-mlight"
      } mobile:w-full flex sm:px-6 sm:py-4 justify-between items-center z-40 font-display mobile:px-4 mobile:py-2 fixed`}
    >
      <h1
        className={`${
          darkMode ? "  text-mypurple " : ""
        }text-mypurple sm:text-2xl mobile:text-lg lg:text-4xl font-bold lmobile:text-xl`}
      >
        Syed Farazuddin
      </h1>
      <ul className=" justify-center items-center sm:gap-5 lg:gap-10 mobile:hidden sm:flex font-semibold">
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          <a href="#Education">Education</a>
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          <a href="#Skills">Skills</a>
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          <a href="#Certificates">Certificates</a>
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <ul className="md:hidden cursor-pointer lmobile:text-lg">
        <li>
          <FaBars />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
