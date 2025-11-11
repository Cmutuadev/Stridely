import React from "react";

const Newsletter = () => (
  <section className="py-16 lg:py-24 bg-teal text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80"
            alt="Exclusive sneaker offer"
            className="w-64 h-64 object-contain drop-shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Get more discount<br />Off your order
          </h2>
          <p className="text-white/90">
            Join our newsletter and get exclusive access to new releases, special promotions, and insider deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
