import React, { useState } from "react";
import "../../../src/App.css";
import "./header.css";

export default function Header({ activePage, setActivePage, cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <header className="navbar">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className="brand-logo"
          onClick={() => setActivePage("home")}
        >
          Port2<span>Pack</span>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            Home
          </button>

          <button
            className={activePage === "about" ? "active" : ""}
            onClick={() => setActivePage("about")}
          >
            About
          </button>

          <button
            className={activePage === "products" ? "active" : ""}
            onClick={() => setActivePage("products")}
          >
            Products
          </button>

          <button
            className={activePage === "cart" ? "active" : ""}
            onClick={() => setActivePage("cart")}
          >
            Cart ({cart?.length || 0})
          </button>

          <button
            className={activePage === "checkout" ? "active" : ""}
            onClick={() => setActivePage("checkout")}
          >
            Guest Checkout
          </button>

          <button
            className={activePage === "login" ? "active" : ""}
            onClick={() => setActivePage("login")}
          >
            Seller/Admin Login
          </button>

          <button
            className={activePage === "register" ? "active" : ""}
            onClick={() => setActivePage("register")}
          >
            Apply as Seller
          </button>
        </nav>
      </header>
    </>
  );
}