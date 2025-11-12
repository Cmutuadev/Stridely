import React from "react";

const categories = [
  {
    id: 1,
    name: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Basketball",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
  },
  {
    id: 3,
    name: "Lifestyle",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
  },
  {
    id: 4,
    name: "Training",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
  },
];

const Categories = () => (
  <section className="py-16 lg:py-24 bg-neutral-light">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          New In<br />Store Now
        </h2>
        <p className="text-neutral-dark/60 max-w-md">
          Get the latest drops and exclusive releases from top brands. Limited stock available.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
