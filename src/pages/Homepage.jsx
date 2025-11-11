import React from "react";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import About from "../components/sections/About";
import Categories from "../components/sections/Categories";
import Featured from "../components/sections/Featured";
import Products from "../components/sections/Products";
import Testimonials from "../components/sections/Testimonials";
import Newsletter from "../components/sections/Newsletter";

const Homepage = () => (
  <>
    <Hero />
    <StatsBar />
    <About />
    <Categories />
    <Featured />
    <Products />
    <Testimonials />
    <Newsletter />
  </>
);

export default Homepage;