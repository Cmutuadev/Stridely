import React from "react";

const StatsBar = () => (
  <section className="w-[95%] bg mx-auto rounded-[10px] shadow-lg py-6 md:py-8 lg:py-10 -mt-12 mb-2 ">
   <div className='  rounded-lg md:w-auto lg:w-auto   -mt-2 mb-2 lg:mx-2 relative z-20 p-4 md:p-6 grid grid-cols-4 md:grid-cols-4 gap-0 items-center'>
        <div className="text-center p-4 border-r-2  border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">7+</h5>
          <p className="text-sm md:text-base">year experience</p>
        </div>
        <div className="text-center p-4 md:border-r-2  border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">2+</h5>
          <p className="text-sm md:text-base">Country Worldwide</p>
        </div>
        <div className="text-center md:border-l-2 p-4 border-l-2 border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">1k+</h5>
          <p className="text-sm md:text-base">Sneaker solds</p>
        </div>
        <div className="text-center md:border-l-2 p-4 border-l-2 border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">260+</h5>
          <p className="text-sm md:text-base">Sneaker Brands</p>
        </div>
      </div>

  </section>
);

export default StatsBar;
