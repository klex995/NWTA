import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Main;
