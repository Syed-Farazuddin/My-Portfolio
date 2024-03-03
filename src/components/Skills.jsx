import React from "react";
import Skill from "../assets/skills.png";

function Skills() {
  return (
    <div className="flex mobile:w-full lg:max-w-6xl flex-col bg-dark p-10 lg:h-[100vh] font-sans mt-5">
      <h1 className="text-5xl text-center text-zinc-100 font-extrabold font-serif mb-5 mobile:text-3xl">
        Skills
      </h1>
      <div className="grid mobile:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mobile:gap-4 md:gap-8 w-full">
        <div className=" bg-darkblue p-4 flex items-center justify-center gap-1 flex-col">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="java"
          />
          <p className="text-white mobile:text-sm sm:text-lg font-bold">Java</p>
        </div>
        <div className=" bg-darkblue p-4 flex items-center justify-center gap-1 flex-col">
          <img
            alt="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <p className="text-white mobile:text-sm sm:text-lg font-bold">
            Javascript
          </p>
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="react"
          />
          <p className="text-white mobile:text-sm sm:text-lg font-bold">
            React
          </p>
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="bootstrap"
          />
          <p className="text-white mobile:text-sm sm:text-lg font-bold">
            Bootstrap
          </p>
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            alt="redux"
          />
          <p className="text-white mobile:text-sm sm:text-lg font-bold">
            Redux
          </p>
        </div>
        <div className="bg-darkblue p-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            alt="nodejs"
          />
        </div>
        <div className="bg-darkblue p-4 flex items-center justify-center gap-1 flex-col">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            alt="express"
          />
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            alt="mongodb"
          />
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            alt="sql"
          />
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            alt="python"
          />
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="tailwind"
          />
        </div>
        <div
          className="bg-darkblue p-4
          flex
          items-center
          justify-center
          gap-1
          flex-col"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            alt="sass"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
