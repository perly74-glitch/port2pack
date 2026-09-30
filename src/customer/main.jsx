import React, { useState } from "react";
import "../../src/App.css";
import Header from "../customer/component/Header.jsx";
import Cart from "./pages/cart.jsx";

export default function Main() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);
  const sampleProducts = [
    {
      id: 1,
      name: "Handcrafted Leather Bag",
      price: 2.0,
      category: "Fashion",
      vendor: "Artisan Studio",
      image: "/x.jpeg",
      options: ["Brown", "Black", "Tan"],
    },
    {
      id: 1,
      name: "Handcrafted Leather Bag",
      price: 5.0,
      category: "Fashion",
      vendor: "Artisan Studio",
      image: "public/bag.jpeg",
      options: ["Brown", "Black", "Tan"],
    },
    {
      id: 1,
      name: "Luxury leather bag",
      price: 3.0,
      category: "Fashion",
      vendor: "Artisan Studio",
      image: "public/bur.jpeg",
      options: ["Brown", "Black", "Tan"],
    },
    {
      id: 2,
      name: "Organic Coffee Beans",
      price: 1.0,
      category: "Groceries",
      vendor: "Highland Farms",
      image: "public/black cofee.jpeg",
      options: ["Whole Bean", "Medium Grind", "Fine Grind"],
    },
    {
      id: 2,
      name: "Organic Coffee Beans",
      price: 0.5,
      category: "Groceries",
      vendor: "Highland Farms",
      image: "public/po.jpeg",
      options: ["Whole Bean", "Medium Grind", "Fine Grind"],
    },
    {
      id: 2,
      name: "Organic Coffee Beans",
      price: 1.5,
      category: "Groceries",
      vendor: "Highland Farms",
      image: "public/cafin.jpeg",
      options: ["Whole Bean", "Medium Grind", "Fine Grind"],
    },
    {
      id: 3,
      name: "Minimalist Desk Lamp",
      price: 5.0,
      category: "Home & Living",
      vendor: "Lumina Crafts",
      image: "public/lamp.jpeg",
      options: ["Warm White", "Cool White"],
    },
    {
      id: 3,
      name: "Minimalist Desk Lamp",
      price: 9.0,
      category: "Home & Living",
      vendor: "Lumina Crafts",
      image: "public/twistedlamp.jpeg",
      options: ["Warm White", "Cool White"],
    },
    {
      id: 3,
      name: "Minimalist Desk Lamp",
      price: 8.0,
      category: "Home & Living",
      vendor: "Lumina Crafts",
      image: "public/water.jpeg",
      options: ["Warm White", "Cool White"],
    },
    {
      id: 4,
      name: "Wireless Ergonomic Mouse",
      price: 1.0,
      category: "Electronics",
      vendor: "TechPort",
      image: "public/7.jpeg",
      options: ["Matte Black", "Silver"],
    },
    {
      id: 4,
      name: "Wireless Ergonomic Mouse",
      price: 5.0,
      category: "Electronics",
      vendor: "TechPort",
      image: "public/j.jpeg",
      options: ["Matte Black", "Silver"],
    },
    {
      id: 4,
      name: "Wireless Ergonomic Mouse",
      price: 2.0,
      category: "Electronics",
      vendor: "TechPort",
      image: "public/3.jpeg",
      options: ["Matte Black", "Silver"],
    },
    {
      id: 5,
      name: "Ceramic Coffee Mug Set",
      price: 22.0,
      category: "Home & Living",
      vendor: "Artisan Studio",
      image: "public/cup.jpeg",
      options: ["Terracotta", "Cream White", "Sage Green"],
    },
    {
      id: 5,
      name: "Ceramic Coffee Mug Set",
      price: 24.0,
      category: "Home & Living",
      vendor: "Artisan Studio",
      image: "public/mok.jpeg",
      options: ["Terracotta", "Cream White", "Sage Green"],
    },
    {
      id: 5,
      name: "Ceramic Coffee Mug Set",
      price: 17.0,
      category: "Home & Living",
      vendor: "Artisan Studio",
      image: "public/v.jpeg",
      options: ["Terracotta", "Cream White", "Sage Green"],
    },
  ];
  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
    alert(`${product.name} added to cart!`);
  };

      return (
  <div>
    <Header
      activePage={activePage}
      setActivePage={setActivePage}
      cart={cart}
    />
      <main className="container">
        {activePage === "home" && (
          <div className="hero-section">
            <h1 className="hero-title">Welcome to Port2Pack</h1>
            <p className="hero-subtitle">
              Your premier multi-vendor marketplace connecting local producers,
              vendors, and guest shoppers seamlessly.
            </p>
            <div className="marketplace-search">
              <input
                type="text"
                placeholder="Search for products, suppliers or categories..."
              />

              <button className="search-button">Search</button>
            </div>
            <div className="category-section">
              <h3>Shop by Category</h3>

              <div className="category-list">
                <button>Fashion</button>
                <button>Groceries</button>
                <button>Home & Living</button>
                <button>Electronics</button>
              </div>
            </div>
            {/* Marketplace Promotion */}
            <div className="marketplace-banner">
              <div className="banner-content">
                <span className="banner-label">PORT2PACK MARKETPLACE</span>

                <h2>Discover Products From Local Sellers</h2>

                <p>
                  Shop unique products from trusted vendors all in one place.
                </p>

                <button
                  className="banner-button"
                  onClick={() => setActivePage("products")}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="featured-products">
              <div className="section-heading">
                <div>
                  <span className="section-label">SHOP OUR SELECTION</span>

                  <h2>Featured Products</h2>

                  <p>
                    Discover some of the products available from our marketplace
                    vendors.
                  </p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() => setActivePage("products")}
                >
                  View All Products
                </button>
              </div>

              <div className="featured-product-grid">
                {sampleProducts.slice(0, 4).map((item) => (
                  <div className="featured-product-card" key={item.id}>
                    <div className="featured-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="featured-product-image"
                      />
                    </div>

                    <div className="featured-product-info">
                      <p className="featured-category">{item.category}</p>

                      <h3>{item.name}</h3>

                      <p className="featured-vendor">Sold by {item.vendor}</p>

                      <p className="featured-price">
                        {item.price.toFixed(2)} FCFA
                      </p>

                      <button
                        className="featured-cart-button"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div className="featured-products">
              <div className="section-heading">
                <div>
                  <span className="section-label">SHOP OUR SELECTION</span>

                  <h2>Featured Products</h2>

                  <p>
                    Discover some of the products available from our marketplace
                    vendors.
                  </p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() => setActivePage("products")}
                >
                  View All Products
                </button>
              </div>

              <div className="featured-product-grid">
                {sampleProducts.slice(0, 4).map((item) => (
                  <div className="featured-product-card" key={item.id}>
                    <div className="featured-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="featured-product-image"
                      />
                    </div>

                    <div className="featured-product-info">
                      <p className="featured-category">{item.category}</p>

                      <h3>{item.name}</h3>

                      <p className="featured-vendor">Sold by {item.vendor}</p>

                      <p className="featured-price">
                        {item.price.toFixed(2)} FCFA
                      </p>

                      <button
                        className="featured-cart-button"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn-burgundy explore-button"
              onClick={() => setActivePage("products")}
            >
              Explore Marketplace
            </button>
          </div>
        )}

        {activePage === "products" && (
          <div>
            <h2 className="page-header">Marketplace Products</h2>
            <div className="product-search">
  <input
    type="text"
    placeholder="Search products..."
  />
  <button className="search-button">Search</button>
</div>

<div className="product-grid">
              {sampleProducts.map((item) => (
                <div key={item.id} className="product-card">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                    <h3>{item.name}</h3>
                    <p className="product-vendor">Vendor: {item.vendor}</p>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="btn-burgundy"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'cart' && (
         <Cart />
       )}
        {activePage === "cart" && (
          <div className="card">
            <h2 className="page-header">Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} style={{ marginBottom: "0.8rem" }}>
                      <strong>{item.name}</strong> — ${item.price.toFixed(2)}{" "}
                      <em>(Vendor: {item.vendor})</em>
                    </li>
                  ))}
                </ul>
                <br />
                <button
                  className="btn-burgundy"
                  onClick={() => setActivePage("checkout")}
                >
                  Proceed to Guest Checkout
                </button>
              </div>
            )}
          </div>
        )}

      {activePage === "checkout" && (
  <div className="checkout-page">
    <div className="checkout-card">
      <h2>Guest Checkout</h2>

      <p className="checkout-subtitle">
        No account required. Enter your details to complete your order.
      </p>

      <div className="checkout-field">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
        />
      </div>

      <div className="checkout-field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="checkout-field">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="checkout-field">
        <label>Delivery Address</label>
        <textarea
          placeholder="Enter your delivery address"
          rows="4"
        ></textarea>
      </div>

      <button
        className="btn-burgundy checkout-button"
        onClick={() => alert("Order submitted successfully")}
      >
        Place Order
      </button>
    </div>
  </div>
)}

       {activePage === "login" && (
  <div className="login-page">
    <div className="login-card">
      <h2>Seller & Admin Login</h2>

      <p className="login-subtitle">
        Log in to manage your Port2Pack account.
      </p>

      <div className="login-field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="login-field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <button
        className="btn-burgundy login-button"
        onClick={() => alert("Login submitted")}
      >
        Login
      </button>

      <p className="login-help">
        Seller and administrator access only.
      </p>
    </div>
  </div>
)}
{activePage === "register" && (
  <div className="seller-page">
    <div className="seller-card">
      <h2>Apply as a Seller</h2>

      <p className="seller-subtitle">
        Join Port2Pack and start selling your products to customers.
      </p>

      <div className="seller-field">
        <label>Business Name</label>
        <input
          type="text"
          placeholder="Enter your business name"
        />
      </div>

      <div className="seller-field">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
        />
      </div>

      <div className="seller-field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="seller-field">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="seller-field">
        <label>Business Description</label>
        <textarea
          placeholder="Tell us about your business and products"
          rows="4"
        ></textarea>
      </div>

      <button
        className="btn-burgundy seller-button"
        onClick={() => alert("Seller application submitted")}
      >
        Submit Application
      </button>
    </div>
  </div>
)}
      </main>
    </div>
  );
}
