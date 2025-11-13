import React from "react";

const StatsBar = () => (
  <section className="w-full bg-gradient-to-r from-secondary to-accent text-white py-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-row-reverse gap-8 justify-center">

        <div className="bg-white/10 rounded-lg shadow-lg px-8 py-6 text-center">
          <div className="text-3xl lg:text-4xl font-bold mb-2">7</div>
          <div className="text-sm text-white/80">Years Experience</div>
        </div>

        <div className="bg-white/10 rounded-lg shadow-lg px-8 py-6 text-center">
          <div className="text-3xl lg:text-4xl font-bold mb-2">2</div>
          <div className="text-sm text-white/80">Country Worldwide</div>
        </div>
        
        <div className="bg-white/10 rounded-lg shadow-lg px-8 py-6 text-center">
          <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
          <div className="text-sm text-white/80">Sneaker Brands</div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
