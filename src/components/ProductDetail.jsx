import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-center text-red-500">{error}</p>;
  }

  const handleAdd = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto p-4 my-4 sm:p-6">
      
      {/* responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* product image */}
        <div className="flex justify-center ">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* product info */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-6">
            ₹{product.price}
          </p>

          {/* action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAdd}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 text-white rounded hover:bg-amber-400"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded hover:bg-gray-100"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
