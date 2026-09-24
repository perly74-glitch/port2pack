import react from 'react';
import { Link} from 'react-router-dom';
import '../../../src/App.css';
import { useState } from 'react';
import Header from '../component/Header';
export default function Product(){


    const [activePage, setActivePage] = useState('home');
  
  
   const sampleProducts = [
      {
        id: 1,
        name: 'Handcrafted Leather Bag',
        price: 2.00,
        category: 'Fashion',
        vendor: 'Artisan Studio',
        image: '/x.jpeg',
        options: ['Brown', 'Black', 'Tan']
      },
        {
        id: 1,
        name: 'Handcrafted Leather Bag',
        price: 5.00,
        category: 'Fashion',
        vendor: 'Artisan Studio',
        image: 'public/bag.jpeg',
        options: ['Brown', 'Black', 'Tan']
      },
        {
        id: 1,
        name: 'Luxury leather bag',
        price: 3.00,
        category: 'Fashion',
        vendor: 'Artisan Studio',
        image: 'public/bur.jpeg',
        options: ['Brown', 'Black', 'Tan']
      },
      {
        id: 2,
        name: 'Organic Coffee Beans',
        price: 1.00,
        category: 'Groceries',
        vendor: 'Highland Farms',
        image: 'public/black cofee.jpeg',
        options: ['Whole Bean', 'Medium Grind', 'Fine Grind']
      },
       {
        id: 2,
        name: 'Organic Coffee Beans',
        price: 0.50,
        category: 'Groceries',
        vendor: 'Highland Farms',
        image: 'public/po.jpeg',
        options: ['Whole Bean', 'Medium Grind', 'Fine Grind']
      },
       {
        id: 2,
        name: 'Organic Coffee Beans',
        price: 1.50,
        category: 'Groceries',
        vendor: 'Highland Farms',
        image: 'public/cafin.jpeg',
        options: ['Whole Bean', 'Medium Grind', 'Fine Grind']
      },
      {
        id: 3,
        name: 'Minimalist Desk Lamp',
        price: 5.00,
        category: 'Home & Living',
        vendor: 'Lumina Crafts',
        image: 'public/lamp.jpeg',
        options: ['Warm White', 'Cool White']
      },
        {
        id: 3,
        name: 'Minimalist Desk Lamp',
        price: 9.00,
        category: 'Home & Living',
        vendor: 'Lumina Crafts',
        image: 'public/twistedlamp.jpeg',
        options: ['Warm White', 'Cool White']
      },
        {
        id: 3,
        name: 'Minimalist Desk Lamp',
        price: 8.00,
        category: 'Home & Living',
        vendor: 'Lumina Crafts',
        image: 'public/water.jpeg',
        options: ['Warm White', 'Cool White']
      },
      {
        id: 4,
        name: 'Wireless Ergonomic Mouse',
        price: 1.00,
        category: 'Electronics',
        vendor: 'TechPort',
        image: 'public/7.jpeg',
        options: ['Matte Black', 'Silver']
      },
        {
        id: 4,
        name: 'Wireless Ergonomic Mouse',
        price: 5.00,
        category: 'Electronics',
        vendor: 'TechPort',
        image: 'public/j.jpeg',
        options: ['Matte Black', 'Silver']
      },
        {
        id: 4,
        name: 'Wireless Ergonomic Mouse',
        price: 2.00,
        category: 'Electronics',
        vendor: 'TechPort',
        image: 'public/3.jpeg',
        options: ['Matte Black', 'Silver']
      },
      {
        id: 5,
        name: 'Ceramic Coffee Mug Set',
        price: 22.00,
        category: 'Home & Living',
        vendor: 'Artisan Studio',
        image: 'public/cup.jpeg',
        options: ['Terracotta', 'Cream White', 'Sage Green']
      },
      {
        id: 5,
        name: 'Ceramic Coffee Mug Set',
        price: 24.00,
        category: 'Home & Living',
        vendor: 'Artisan Studio',
        image: 'public/mok.jpeg',
        options: ['Terracotta', 'Cream White', 'Sage Green']
      },
      {
        id: 5,
        name: 'Ceramic Coffee Mug Set',
        price: 17.00,
        category: 'Home & Living',
        vendor: 'Artisan Studio',
        image: 'public/v.jpeg',
        options: ['Terracotta', 'Cream White', 'Sage Green']
      },
    
    ];
  return(

    
    <>
     <Header activePage={activePage} setActivePage={setActivePage} />
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
     </>
  )
}