import react from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import "./header.css";
import { useState } from "react";

export default function Header({ activePage, setActivePage }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      {/* Header Bar */}
      <header className="navbar">
        <div className="brand-logo" onClick={() => setActivePage("home")}>
          Port2<span>Pack</span>
        </div>
        <nav className="nav-menu">
          <a href="/">
            <button
              className={activePage === "home" ? "active" : ""}
              onClick={() => setActivePage("home")}
            >
              Home
            </button>
          </a>
          <a href="/about">
            <button className={activePage === "about" ? "active" : ""}>
              About
            </button>
          </a>
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
            Cart ({cart.length})
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
