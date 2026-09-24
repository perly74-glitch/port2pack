import React, { useState } from 'react';
import './App.css';
import Main from './customer/main.jsx';
import {  Routes,Route } from 'react-router-dom';
import About from '../src/customer/pages/About.jsx';
import Product from './customer/pages/Product.jsx';
export default function App() {




  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
      </Routes>
  );
}