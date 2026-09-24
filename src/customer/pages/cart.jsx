import React from "react";

export default function Cart() {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      <div className="cart-empty">
  <p>Your cart is currently empty.</p>

  <button
    className="btn-burgundy"
    onClick={() => window.history.back()}
  >
    Continue Shopping
  </button>
</div>
    </div>
  );
}