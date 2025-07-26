import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded mb-6 border"
      />
      <h1 className="text-3xl font-bold mb-2 text-primary">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <div className="text-2xl font-semibold text-accent mb-4">${product.price.toFixed(2)}</div>
      {/* Add more details or actions as needed */}
    </div>
  );
};

export default ProductPage;
