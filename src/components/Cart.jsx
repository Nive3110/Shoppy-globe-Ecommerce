import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  // get cart items from redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calculate total price of items in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // clear all items from cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // navigate to checkout page
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // show message if cart is empty
  if (cartItems.length === 0) {
    return <p className="p-6 text-center">Your cart is empty.</p>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Your Cart
      </h1>

      {/* render all cart items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* total price and action buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        
        <p className="text-lg sm:text-xl font-bold text-center sm:text-left">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
          >
            Clear Cart
          </button>

          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-400 w-full sm:w-auto"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
