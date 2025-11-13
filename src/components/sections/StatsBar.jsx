import React from "react";

const StatsBar = () => (
  <section className="w-full bg-white py-8">
    <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {/* Box 1 */}
      <div className="bg-gray-50 rounded-xl shadow-lg py-6 px-4 flex flex-col items-center justify-center border">
        <div className="text-2xl font-bold text-primary mb-1">7+</div>
        <div className="text-gray-600 text-sm font-medium">Years Experience</div>
      </div>
      {/* Box 2 */}
      <div className="bg-gray-50 rounded-xl shadow-lg py-6 px-4 flex flex-col items-center justify-center border">
        <div className="text-2xl font-bold text-primary mb-1">2+</div>
        <div className="text-gray-600 text-sm font-medium">Country Worldwide</div>
      </div>
      {/* Box 3 */}
      <div className="bg-gray-50 rounded-xl shadow-lg py-6 px-4 flex flex-col items-center justify-center border">
        <div className="text-2xl font-bold text-primary mb-1">100+</div>
        <div className="text-gray-600 text-sm font-medium">Sneaker Brands</div>
      </div>
    </div>
  </section>
);

export default StatsBar;
