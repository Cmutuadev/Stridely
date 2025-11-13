import React from "react";

const Testimonials = () => (
  <section className="py-16 lg:py-24 bg-neutral-light">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12">
        What People Are Saying About Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg p-8 lg:p-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-primary">Josh Brown</h3>
              <p className="text-sm text-neutral-dark/60">Verified Buyer</p>
            </div>
          </div>
          <p className="text-neutral-dark/70 leading-relaxed text-lg">
            "I've been shopping at Stridely for over a year now, and I'm consistently impressed by their selection and service. Every pair I've purchased has been authentic and arrived in perfect condition. The quality is unmatched, and their customer support team is always helpful. Highly recommend!"
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-xl">★</span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1634000102944-f359d9385a0d?w=800&h=200&fit=crop&q=80"
            alt="Happy customer with sneakers"
            className="w-full h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
