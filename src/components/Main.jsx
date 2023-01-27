import React from "react";
import About from "../pages/About.jsx";
import Amenities from "../pages/Amenities.jsx";
import aboutBg from "../assets/about.mp4";

export const main = () => {
  return (
    <div>
      <div className="main">
        <video src={aboutBg} autoPlay loop muted />
        <div className="content mt-5 sm:mt-10 ">
          <h1>Welcome to</h1>
          <h1>Greentree Homes</h1>
          <section className="flex flex-col gap-y-5 items-center justify-center mt-5">
            <div className="bg-gray-600 py-3 w-10/12 md:w-4/12 rounded text-center border-b-4 border-white flex justify-center opacity-80 ...">
              <p className="font-sans sm:text-xl w-11/12 text-xs">
                Irvine's hidden gem with 626 single family homes at the city's
                center. As one of the oldest neighborhoods in Irvine, this area
                has a rich history and has made significant contributions to the
                fabric of Irvine City.
              </p>
            </div>
            <div className="bg-gray-600 py-3 w-8/12 h-6/12 md:w-10/12 rounded text-center border-b-4 border-white flex justify-center opacity-80 ...">
              <p className="font-sans sm:text-xl text-xs w-11/12">
                Greentree is the only neighborhood with a HOA within the North
                El Camino project area. The Greentree HOA is a resident group
                that maintains the unnamed private park within the area. Irvine
                was designed as a series of “villages” with each village
                separated by six-lane streets and containing residential areas,
                commercial centers, schools, religious institutions, and open
                spaces. Irvine was envisioned as a community that would allow
                residents an easy and comfortable lifestyle, and included design
                elements such as cul-de-sacs, parks, and greenbelts.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Amenities />
      <About />
    </div>
  );
};

export default main;
