import React from "react";
import Navbar from "../components/Navbar";
import LocationIcon from "../assets/LocationIcon.svg";

import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-1 h-10 mt-2 mb-2">
        <img src={LocationIcon} alt="LocationIcon" />
        <div className="flex flex-col justify-center">
          <span className="flex text-yellow-1000 p-1 text-lg">DELIVER TO</span>
        </div>
      </div>
      <Carousel />
      <h3 className="text-gray-600 mt-2 mb-2">Restaurants and cafes</h3>
      <div className="flex w-full h-12 text-gray-500 text-center gap-2 pr-2 pl-2 overflow-x-auto items-center">

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>All</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍔 Hamburger</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍕 Pizza</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🥗 Salad</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍝 Pasta</p>
          </div>
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
