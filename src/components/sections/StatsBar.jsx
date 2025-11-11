import React from "react";

const StatsBar = () => (
  <section className="w-full bg-gradient-to-r from-secondary to-accent text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl lg:text-4xl font-bold mb-2">7</div>
          <div className="text-sm text-white/80">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl lg:text-4xl font-bold mb-2">2</div>
          <div className="text-sm text-white/80">Country Worldwide</div>
        </div>
        <div>
          <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
          <div className="text-sm text-white/80">Sneaker Brands</div>
        </div>
        <div>
          <div className="text-3xl lg:text-4xl font-bold mb-2">250+</div>
          <div className="text-sm text-white/80">Happy Customers</div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
