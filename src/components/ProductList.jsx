import React from "react";
// import ProductCard from "./ProductCard";
import { ProductCard } from ".";

const ProductList = ({ Products }) => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Products.length > 0 ? (
        Products.map((prod) => <ProductCard key={prod.id} prod={prod} />)
      ) : (
        <h3 className="text-center text-gray-500 col-span-full">
          There is no product yet
        </h3>
      )}
    </div>
  );
};

export default ProductList;
