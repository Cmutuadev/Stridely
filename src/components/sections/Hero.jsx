import React from "react";
import heroShoeImg from "../../assets/nike-hero.png";

const Hero = () => (
  <section className="w-full bg-gradient-to-br from-[#0a174e] via-[#1d2951] to-[#274690] text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl">👟</span>
            </div>
            <span className="text-sm font-medium text-[#c9d6ff]">Stridely</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-md">
            Step Into Style<br />
            <span className="text-accent">Elevate Your Game</span>
          </h1>
          <p className="text-[#e6eaf4] text-lg max-w-lg">
            Discover premium sneakers from top brands. Whether you're hitting the gym, the court, or the streets, we've got the perfect pair for your lifestyle.
          </p>
          <button className="bg-accent hover:bg-[#21409a] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl">
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
