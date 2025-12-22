import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // get cart items count from redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* logo */}
      <Link to="/" className="text-2xl font-bold text-amber-500">
        ShoppyGlobe
      </Link>

      {/* desktop navigation */}
      <nav className="space-x-6 hidden md:flex items-center">
        <Link to="/" className="hover:text-amber-400">Home</Link>
        <Link to="/products" className="hover:text-amber-400">Products</Link>
       

        {/* cart icon */}
        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>

          {/* cart count badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>

      {/* mobile cart icon */}
      <div className="md:hidden flex items-center gap-4">
        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* menu icon (future use) */}
        <button className="text-xl">☰</button>
      </div>
    </header>
  );
}

export default Header;
