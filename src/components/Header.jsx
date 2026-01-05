import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold text-green-600">EcoShop</span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="nav-link">
              Accueil
            </a>
            <a href="/products" className="nav-link">
              Produits
            </a>
            <a href="/cart" className="nav-link">
              Panier
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <a
              href="/cart"
              className="relative text-gray-700 hover:text-green-600"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <a href="/" className="mobile-link">
            Accueil
          </a>
          <a href="/products" className="mobile-link">
            Produits
          </a>
          <a href="/cart" className="mobile-link">
            Panier
          </a>
          <a href="/contact" className="mobile-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
