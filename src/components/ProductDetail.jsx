// src/components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  const handleAdd = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="p-6 flex gap-10">

      <img
        src={product.thumbnail}
        loading="lazy"
        alt={product.title}
        className="w-80 rounded-lg shadow"
      />

      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-2xl font-semibold text-green-600 mb-4">
          ₹{product.price}
        </p>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}
