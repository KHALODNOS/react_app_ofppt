import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            About Shop.ma
          </h3>
          <p className="text-sm text-gray-400">
            Shop.ma is your trusted online store for tech, accessories, and much
            more. Quality products, fast delivery, and satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-green-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-green-500 transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@shop.ma</li>
            <li>Phone: +212 600 000 000</li>
            <li>Address: Casablanca, Morocco</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-green-500 transition text-xl">
              🌐
            </a>
            <a href="#" className="hover:text-green-500 transition text-xl">
              📘
            </a>
            <a href="#" className="hover:text-green-500 transition text-xl">
              🐦
            </a>
            <a href="#" className="hover:text-green-500 transition text-xl">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="bg-gray-800 py-4 mt-6">
        <p className="text-center text-gray-400 text-sm transition hover:text-green-500">
          &copy; 2025 Shop.ma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
