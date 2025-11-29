import React from "react";

const Featured = () => (
  <section className="py-1 lg:py-24 bg-white">
    <div className=" flex flex-row items-center">
      <div className=" flex flex-row items-center gap-12 max-w-fit mx-auto px-7 lg:px-1">
        <div className="">
          <h2 className="text-fit lg:text-fit font-bold text-primary flex flex-row items-center">
            The Best Sneaker<br />Retailer of Your Choice
          </h2>
          <p className="text-neutral-dark/70 leading-relaxed">
            For over 7 years, we've been the trusted destination for sneaker enthusiasts worldwide. Our commitment to authenticity, quality, and customer satisfaction has made us a leader in the industry.
          </p>
          <p className="text-neutral-dark/70 leading-relaxed">
            From limited edition releases to everyday essentials, we curate every product with care. Our partnerships with premium brands ensure you get genuine products at competitive prices, backed by our satisfaction guarantee.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"
            alt="Sneaker collection showcase"
            className="w-fit h-64 object-cover rounded-lg shadow-lg flex flex-row items-center"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
