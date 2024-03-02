import React from "react";
import Nav from "../components/Nav";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import Banner from "../components/Banner";
import Education from "../components/Education";

function Homepage() {
  return (
    <div className="bg-dark text-white font-serif">
      <Nav />
      <div className="mobile:px-0 mobile:py-10 lg:px-10 lg:py-10 flex flex-col items-center justify-center">
        <Banner />
        <Education />
        <Skills />
        <Certificates />
      </div>
    </div>
  );
}

export default Homepage;
