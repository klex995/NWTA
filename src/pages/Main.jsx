import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Main;
