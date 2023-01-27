import React from "react";
import About from "../pages/About.jsx";
import Amenities from "../pages/Amenities.jsx";

export const main = () => {
  return (
    <div>
      <div className="main">
        <video
          src="https://youfiles.herokuapp.com/videodictionary/?m=Video_Player_Drive&state=%7B%22ids%22:%5B%2210aqnVxMYdaiZOqIebDN_tq2BYI-FsPDe%22%5D,%22action%22:%22open%22,%22resourceKeys%22:%7B%7D%7D"
          autoPlay
          loop
          muted
        />
        <div className="content">
          <h1>Welcome to</h1>
          <h1>Greentree Homes</h1>
          <section className="flex justify-center mt-5">
            <div className="bg-gray-600 py-3 w-6/12 md:w-4/12 rounded text-center border-b-4 border-white flex justify-center opacity-80 ...">
              <p className="font-sans text-xl w-11/12">
                Irvine's hidden gem with 626 single family homes at the city's
                center. As one of the oldest neighborhoods in Irvine, this area
                has a rich history and has made significant contributions to the
                fabric of Irvine City.
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
