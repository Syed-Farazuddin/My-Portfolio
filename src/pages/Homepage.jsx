import React, { useContext } from "react";
import Nav from "../components/Nav";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import Banner from "../components/Banner";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import { FaMoon, FaSun } from "react-icons/fa";
import { GlobalContext } from "../context/context";

function Homepage() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? "bg-dark text-white" : "bg-light text-textlight"
      } font-serif`}
    >
      <Nav />
      <div className="mobile:px-0 mobile:py-10 lg:px-10 lg:py-10 flex flex-col items-center justify-center relative">
        <div
          className=" right-5 text-white top-20 h-10 w-10 bg-customblue rounded-full flex justify-center items-center fixed z-30"
          onClick={() => {
            setDarkMode((prev) => !prev);
          }}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </div>
        <Banner />
        <Education />
        <Skills />
        <Portfolio />
        <Certificates />
      </div>
    </div>
  );
}

export default Homepage;
