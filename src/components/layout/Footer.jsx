import React from "react";
import { BsInstagram, BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-white">Our Products</h3>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              <li><a href="#" className="hover:text-accent transition">Running Shoes</a></li>
              <li><a href="#" className="hover:text-accent transition">Basketball</a></li>
              <li><a href="#" className="hover:text-accent transition">Lifestyle</a></li>
              <li><a href="#" className="hover:text-accent transition">Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              <li><a href="#" className="hover:text-accent transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition">Care Tips</a></li>
              <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              <li><a href="#" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition">Press</a></li>
              <li><a href="#" className="hover:text-accent transition">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              <li><a href="#" className="hover:text-accent transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition">FAQs</a></li>
              <li><a href="#" className="hover:text-accent transition">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Privacy & Terms</h3>
            <ul className="space-y-2 text-sm text-neutral-light/70">
              <li><a href="#" className="hover:text-accent transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xl">👟</span>
            </div>
            <span className="font-bold text-white">Stridely</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-light/70 hover:text-accent transition" aria-label="Facebook">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-neutral-light/70 hover:text-accent transition" aria-label="Instagram">
              <BsInstagram className="text-xl" />
            </a>
            <a href="#" className="text-neutral-light/70 hover:text-accent transition" aria-label="Twitter">
              <BsTwitterX className="text-xl" />
            </a>
            <a href="#" className="text-neutral-light/70 hover:text-accent transition" aria-label="YouTube">
              <BsYoutube className="text-xl" />
            </a>
            <a href="#" className="text-neutral-light/70 hover:text-accent transition" aria-label="LinkedIn">
              <BsLinkedin className="text-xl" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-neutral-light/50">
          <p>© {new Date().getFullYear()} Stridely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
