import React, { useContext, useState } from "react";
import { BiCart, BiSearch, BiUser, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { searchProducts, quantity } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-2xl text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <BiMenu />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl">👟</span>
              </div>
              <span className="font-bold text-xl text-primary">Stridely</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-neutral-dark hover:text-accent transition font-medium">Home</a>
            <a href="#" className="text-neutral-dark hover:text-accent transition font-medium">Shop</a>
            <a href="#" className="text-neutral-dark hover:text-accent transition font-medium">About</a>
            <a href="#" className="text-neutral-dark hover:text-accent transition font-medium">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-dark/50" />
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-neutral-dark/20 rounded-lg focus:outline-none focus:border-accent w-48 lg:w-64"
                aria-label="Search sneakers"
              />
            </div>
            <Link to="/cart" className="relative" aria-label="View cart">
              <BiCart className="text-2xl text-primary" />
              {quantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs h-5 w-5 flex items-center justify-center rounded-full font-bold">
                  {quantity}
                </span>
              )}
            </Link>
            <button className="text-2xl text-primary" aria-label="User profile">
              <BiUser />
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <a href="#" className="block py-2 text-neutral-dark hover:text-accent transition">Home</a>
            <a href="#" className="block py-2 text-neutral-dark hover:text-accent transition">Shop</a>
            <a href="#" className="block py-2 text-neutral-dark hover:text-accent transition">About</a>
            <a href="#" className="block py-2 text-neutral-dark hover:text-accent transition">Contact</a>
            <div className="relative pt-2">
              <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-dark/50" />
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-neutral-dark/20 rounded-lg focus:outline-none focus:border-accent w-full"
                aria-label="Search sneakers"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
