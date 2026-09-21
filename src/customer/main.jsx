import React, { useState } from 'react';
import '../../src/App.css';
import Header from '../customer/component/Header.jsx';


export default function Main() {
  const [activePage, setActivePage] = useState('home');


 const sampleProducts = [
    {
      id: 1,
      name: 'Handcrafted Leather Bag',
      price: 45.00,
      category: 'Fashion',
      vendor: 'Artisan Studio',
      image: '/x.jpeg',
      options: ['Brown', 'Black', 'Tan']
    },
    {
      id: 2,
      name: 'Organic Coffee Beans',
      price: 18.50,
      category: 'Groceries',
      vendor: 'Highland Farms',
      image: '/YOUR_COFFEE_IMAGE_NAME.jpg',
      options: ['Whole Bean', 'Medium Grind', 'Fine Grind']
    },
    {
      id: 3,
      name: 'Minimalist Desk Lamp',
      price: 32.00,
      category: 'Home & Living',
      vendor: 'Lumina Crafts',
      image: '/YOUR_LAMP_IMAGE_NAME.jpg',
      options: ['Warm White', 'Cool White']
    },
    {
      id: 4,
      name: 'Wireless Ergonomic Mouse',
      price: 25.00,
      category: 'Electronics',
      vendor: 'TechPort',
      image: '/YOUR_MOUSE_IMAGE_NAME.jpg',
      options: ['Matte Black', 'Silver']
    },
    {
      id: 5,
      name: 'Ceramic Coffee Mug Set',
      price: 22.00,
      category: 'Home & Living',
      vendor: 'Artisan Studio',
      image: '/YOUR_MUG_IMAGE_NAME.jpg',
      options: ['Terracotta', 'Cream White', 'Sage Green']
    }
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>

        <Header /> 
      <main className="container">
        {activePage === 'home' && (
          <div className="hero-section">
            <h1 className="hero-title">Welcome to Port2Pack</h1>
            <p className="hero-subtitle">
              Your premier multi-vendor marketplace connecting local producers, vendors, and guest shoppers seamlessly.
            </p>
            <button className="btn-burgundy" onClick={() => setActivePage('products')}>
              Explore Marketplace
            </button>
          </div>
        )}

     

        {activePage === 'products' && (
          <div>
            <h2 className="page-header">Marketplace Products</h2>
            <div className="product-grid">
              {sampleProducts.map((item) => (
                <div key={item.id} className="product-card">
                  <div>
                    <img src={item.image} alt={item.name} className="product-image" />
                    <h3>{item.name}</h3>
                    <p className="product-vendor">Vendor: {item.vendor}</p>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                  </div>
                  <button className="btn-burgundy" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'cart' && (
          <div className="card">
            <h2 className="page-header">Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.8rem' }}>
                      <strong>{item.name}</strong> — ${item.price.toFixed(2)} <em>(Vendor: {item.vendor})</em>
                    </li>
                  ))}
                </ul>
                <br />
                <button className="btn-burgundy" onClick={() => setActivePage('checkout')}>
                  Proceed to Guest Checkout
                </button>
              </div>
            )}
          </div>
        )}

        {activePage === 'checkout' && (
          <div className="card">
            <h2 className="page-header">Guest Checkout</h2>
            <p>No account required! Enter your details to complete your order.</p>
          </div>
        )}

        {activePage === 'login' && (
          <div className="card">
            <h2 className="page-header">Seller & Admin Access</h2>
            <p>Log in to manage inventory, track orders, or oversee marketplace activity.</p>
          </div>
        )}

        {activePage === 'register' && (
          <div className="card">
            <h2 className="page-header">Seller Application</h2>
            <p>Apply today to start selling on Port2Pack.</p>
          </div>
        )}
      </main>
    </div>
  );
}