import React, { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { GlobalContext } from "../context/context";

function Nav() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? " bg-sdark " : "bg-slight"
      } mobile:w-full flex sm:px-6 sm:py-4 justify-between items-center z-40 font-display mobile:px-4 mobile:py-2`}
    >
      <h1
        className={`${
          darkMode ? "  text-white " : "text-textlight"
        } sm:text-2xl mobile:text-lg lg:text-4xl font-bold lmobile:text-xl`}
      >
        Syed Farazuddin
      </h1>
      <ul className=" justify-center items-center sm:gap-10 mobile:hidden sm:flex font-semibold">
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          Education
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          Skills
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          Portfolio
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          Certificates
        </li>
        <li className="hover:text-mypurple  sm:text-lg cursor-pointer">
          Contact
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
