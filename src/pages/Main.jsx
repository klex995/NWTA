import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Main;
