// src/components/ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductList() {
  // Fetch products using custom hook
  const { products, loading, error } = useFetchProducts();

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Loading and error handling
  if (loading) return <p className="p-6 text-center">Loading products...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
