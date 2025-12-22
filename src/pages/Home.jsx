import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1503602642458-232111445657",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // auto slide every 3 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [images.length]); // ✅ ESLint satisfied

  const nextSlide = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="p-4 sm:p-6 text-center max-w-6xl mx-auto">
      <div className="relative mb-8">
        <img
          src={images[current]}
          alt="banner"
          loading="lazy"
          className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg pointer-events-none"
        />

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded z-10"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded z-10"
        >
          ›
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
        Welcome to ShoppyGlobe!
      </h1>

      <p className="mb-6 text-gray-600">
        Your one-stop shop for awesome products.
      </p>

      <Link
        to="/products"
        className="inline-block px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-400"
      >
        View Products
      </Link>
    </div>
  );
}

export default Home;
