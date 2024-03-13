import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import Banner from "../components/Banner";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import { FaMoon, FaSun } from "react-icons/fa";
import { GlobalContext } from "../context/context";
import Contact from "../components/Contact";
import About from "../components/About";
import { LuArrowBigDown } from "react-icons/lu";
import { LuArrowBigUp } from "react-icons/lu";

function Homepage() {
  const [openColors, setOpenColors] = useState(false);
  const colors = [
    "#FF5733",
    "#C70039",
    "#581845",
    "#DAF7A6",
    "#191970",
    "#BA68C8",
  ];
  const { darkMode, setDarkMode, setCurrentColor } = useContext(GlobalContext);
  return (
    // This is my personal porfolio which consists of somethings i hold. I will surely add more things later on in this but thats all for now
    <div
      className={`${
        darkMode ? "bg-dark text-white" : "bg-light text-textlight"
      } font-serif`}
    >
      <Nav />
      <div className="mobile:px-0 mobile:py-10 lg:px-10 lg:py-10 flex flex-col items-center justify-center relative">
        <div
          className={`mobile:right-3 sm:right-5 top-20 fixed z-30 flex flex-col gap-4`}
        >
          <div
            className={`${
              darkMode ? " bg-customblue text-white " : "text-black bg-slight"
            } mobile:w-8 mobile:h-8 sm:h-10 sm:w-10 rounded-full flex justify-center items-center`}
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </div>
          <div
            className={`${
              darkMode ? " bg-customblue text-white " : "text-black bg-slight"
            } mobile:w-8 mobile:h-8 sm:h-10 sm:w-10 rounded-full flex justify-center items-center`}
            onClick={() => setOpenColors((prev) => !prev)}
          >
            {openColors ? <LuArrowBigUp /> : <LuArrowBigDown />}
          </div>
          {openColors ? (
            <>
              {colors.map((item, index) => (
                <div
                  style={{ background: `${item}` }}
                  key={index}
                  className={`bg-[#${item}] mobile:w-8 mobile:h-8 sm:h-10 sm:w-10 rounded-full flex justify-center items-center mt-2`}
                  onClick={() => {
                    setOpenColors((prev) => !prev);
                    setCurrentColor(item);
                  }}
                ></div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
        <Banner />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Portfolio />
        {/* <Certificates /> */}
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
