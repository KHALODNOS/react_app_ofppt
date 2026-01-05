import React from "react";

const ProductCard = ({ prod }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="w-full h-50 overflow-hidden">
        <img
          src={prod.image}
          alt={prod.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-sm text-gray-500 mb-1">{prod.category}</span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {prod.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4 flex-1">{prod.description}</p>

        {/* Price & Stock */}
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold text-lg">
            ${prod.price}
          </span>
          <span
            className={`text-sm font-medium ${
              prod.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {prod.inStock ? "Available" : "Out of Stock"}
          </span>
        </div>

        {/* Add to Cart Button */}
        {prod.inStock && (
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded shadow-md hover:bg-green-700 hover:scale-105 transition transform duration-300">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
