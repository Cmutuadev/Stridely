import React from "react";

const StatsBar = () => (
  <section className="w-full bg-gradient-to-r from-secondary to-accent text-white py-8">
    <div className="max-w-4xl mx-auto px-6 lg:px-12">
      <div className="flex flex-row-reverse gap-8 justify-center">
   
        <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center">
          <div className="text-sm text-gray-700 font-semibold mb-2">Years Experience</div>
          <div className="text-3xl lg:text-4xl font-bold text-accent">7</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center">
          <div className="text-sm text-gray-700 font-semibold mb-2">Country Worldwide</div>
          <div className="text-3xl lg:text-4xl font-bold text-accent">2</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center">
          <div className="text-sm text-gray-700 font-semibold mb-2">Sneaker Brands</div>
          <div className="text-3xl lg:text-4xl font-bold text-accent">100+</div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
