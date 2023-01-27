import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Greenbelt from "../assets/Greenbelt.png";
import calendar from "../assets/calendar.png";

const Events = () => {
  return (
    <div className="object-scale-down">
      <Navbar />
      <div className="bg-cover">
        <img src={Greenbelt} alt="" />
      </div>

      <div className="contentevents">
        <div>
          <h1 className="top-0 flex justify-center md:pt-10 pb-10">
            Community Events
          </h1>
          <section className="flex justify-center mt-5">
            <div className="bg-gray-600 py-3 w-11/12 lg:w-4/12 rounded text-center border-b-4 border-green-700 flex justify-center opacity-80 ...">
              <p className="font-sans text-xl w-11/12 text-green-100">
                Events at Greentree are what keep your community connected and
                lively. Join us at one of our events and get to know your
                neighbors!
              </p>
            </div>
          </section>
        </div>
        <div>
          <a href="https://www.greentreehomesirvine.org/calendar">
            <img
              className="saturate-150 ml-32 md:ml-52 pt-10 pb-5 transform h-3/12 w-4/12 md:h-6/12 md:w-5/12 flex justify-center 
                items-baseline cursor-pointer"
              src={calendar}
              alt="calendar"
            />
            <text className="flex justify-center md:text-2xl text-sm text-black md:text-white cursor-pointer mb-40 pb-10">
              Upcoming Events!
            </text>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
