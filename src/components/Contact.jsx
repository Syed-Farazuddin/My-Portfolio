import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
function Contact() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div
      className={`flex mobile:w-full lg:max-w-6xl flex-col ${
        darkMode ? "bg-dark " : "bg-light "
      } p-10  font-sans mt-5`}
      id="Contact"
    >
      <h1
        className={`${
          darkMode ? "text-zinc-100" : "text-textlight"
        } text-5xl text-center  font-extrabold font-serif mb-5 mobile:text-3xl`}
      >
        Contact
      </h1>
      <div className={`p-4 flex items-center justify-center gap-1 flex-col`}>
        <div className="flex justify-around gap-10 items-center">
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/syedfaraz2003/">
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="bg-light p-1 rounded-md">
                <img
                  className="md:w-10 md:h-10 mobile:w-5 mobile:h-5 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                  alt="linkedin"
                />
              </div>
              <p
                className={`${
                  darkMode ? "text-white " : "text-sdark"
                } mobile:text-[10px] font-bold text-center`}
              >
                Linkedin
              </p>
            </div>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/SyedFaraz2405">
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="bg-light p-1 rounded-md">
                <img
                  className="md:w-10 md:h-10 mobile:w-5 mobile:h-5 cursor-pointer"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                  alt="twitter"
                />
              </div>

              <p
                className={`${
                  darkMode ? "text-white " : "text-sdark"
                } mobile:text-[10px] font-bold text-center`}
              >
                Twitter
              </p>
            </div>
          </a>
          {/* Github */}
          <a href="https://github.com/Syed-Farazuddin">
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="bg-light p-1 rounded-md">
                <img
                  className="md:w-10 md:h-10 mobile:w-5 mobile:h-5 cursor-pointer"
                  alt="github"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
              </div>
              <p
                className={`${
                  darkMode ? "text-white " : "text-sdark"
                } font-bold text-center mobile:text-[10px]`}
              >
                Github
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
