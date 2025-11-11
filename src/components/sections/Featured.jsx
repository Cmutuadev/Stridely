import React from "react";

const Featured = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
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
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
