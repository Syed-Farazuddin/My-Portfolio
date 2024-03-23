import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GlobalContext } from "../context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const { darkMode, currentColor } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? " bg-slate-900 " : "bg-slight"
      } mobile:w-full flex sm:px-6 sm:py-4 justify-between items-center z-40 font-display mobile:px-4 mobile:py-2 fixed`}
    >
      <h1
        style={{ color: `${currentColor}` }}
        className={`sm:text-2xl mobile:text-lg lg:text-4xl font-bold lmobile:text-xl`}
      >
        Syed Farazuddin
      </h1>

      <ul
        className={`${
          openMenu
            ? "bg-dark text-white font-serif h-[100vh] left-0 flex flex-col py-5 absolute top-12 right-0 gap-10 transition-all ease-linear "
            : " mobile:hidden"
        } justify-center items-center sm:gap-5 lg:gap-10 sm:flex font-semibold `}
      >
        <li
          className="hover:text-mypurple sm:text-lg cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <a href="#Education">Education</a>
        </li>
        <li
          className="hover:text-mypurple  sm:text-lg cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <a href="#Skills">Skills</a>
        </li>
        <li
          className="hover:text-mypurple  sm:text-lg cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li
          className="hover:text-mypurple  sm:text-lg cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <a href="#Certificates">Certificates</a>
        </li>
        <li
          className="hover:text-mypurple  sm:text-lg cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <ul
        className="md:hidden cursor-pointer lmobile:text-lg"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <li>{!openMenu ? <FaBars /> : <IoIosCloseCircleOutline />}</li>
      </ul>
    </div>
  );
}

export default Nav;
