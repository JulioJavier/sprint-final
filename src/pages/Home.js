import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CardRestaurant from "../components/CardRestaurant";
import ButtonCategories from "../components/ButtonCategories";
import Location from "../components/Location";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Location />
      <Carousel />
      <ButtonCategories />
      <CardRestaurant />
      <Navbar />
    </div>
  );
};

export default Home;
