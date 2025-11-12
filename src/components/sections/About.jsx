import React from "react";

const About = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
            alt="Premium sneakers display"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            We Create Your Style<br />More Authentic
          </h2>
          <p className="text-neutral-dark/70 leading-relaxed">
            At Stridely, we believe every step tells a story. Our curated collection brings together the finest sneakers from iconic brands and emerging designers, ensuring you find the perfect pair that matches your unique style and lifestyle.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Premium Quality Materials</h3>
                <p className="text-sm text-neutral-dark/60">Handpicked sneakers crafted with the finest materials for lasting comfort and durability.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Authentic Designs</h3>
                <p className="text-sm text-neutral-dark/60">100% authentic sneakers from verified brands and authorized retailers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
