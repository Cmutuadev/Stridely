import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Products = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext);
  
  const displayProducts = filteredProducts.slice(0, 8);
  
  if (!filteredProducts.length) {
    return (
      <div className="text-center my-20 text-neutral-dark/80">
        <p>No sneakers found. Try another search!</p>
      </div>
    );
  }
  
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            All Products
          </h2>
          <p className="text-neutral-dark/60 max-w-2xl mx-auto">
            Explore our complete collection of premium sneakers. From classic designs to the latest innovations, find your perfect pair.
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div
                key={id}
                className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all border border-neutral-light"
              >
                <div className="relative overflow-hidden bg-neutral-light">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => addToCart(product, id)}
                      className="p-3 rounded-full bg-white text-primary shadow-lg hover:bg-accent hover:text-white transition-all"
                      aria-label="Add to cart"
                    >
                      <BiCartAdd className="text-xl" />
                    </button>
                    <Link to={`/product/${id}`}>
                      <button
                        className="p-3 rounded-full bg-white text-primary shadow-lg hover:bg-secondary hover:text-white transition-all"
                        aria-label="View details"
                      >
                        <FaEye className="text-xl" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <h3 className="text-xs font-medium text-neutral-dark mb-1 line-clamp-1">{title}</h3>
                  <p className="text-lg font-bold text-primary">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-primary"></button>
          <button className="w-2 h-2 rounded-full bg-neutral-dark/20"></button>
          <button className="w-2 h-2 rounded-full bg-neutral-dark/20"></button>
        </div>
      </div>
    </section>
  );
};

export default Products;
