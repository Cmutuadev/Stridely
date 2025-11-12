import React from "react";
import heroShoeImg from "../../assets/nike-hero.png";

const Hero = () => (
  <section className="w-full bg-gradient-to-br from-primary via-neutral-dark to-secondary text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">👟</span>
            </div>
            <span className="text-sm font-medium text-neutral-light">Stridely</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Step Into Style<br />
            <span className="text-accent">Elevate Your Sneaker Game</span>
          </h1>
          <p className="text-neutral-light/80 text-lg max-w-lg">
            Discover premium sneakers that blend comfort, style, and performance. From street classics to athletic innovation, find your perfect stride.
          </p>
          <button className="bg-accent hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={heroShoeImg}
            alt="Featured sneaker collection"
            className="w-full max-w-sm h-64 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;