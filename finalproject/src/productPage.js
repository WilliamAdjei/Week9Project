import React, { useState } from 'react';
import './App.css';

function ProductPage() {
  //Creating Use Sate for Cart Items  
  const [cartItems, setCartItems] = useState(0);

  //AddtoCart function
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="app">
      {/* Menu bar containing Store Name and Cart */}
      <header className="store-header">
        <div className="container">
          <div className="store-info">
            <h1 className="store-name">William's Computer Accessories</h1>
          </div>
          <div className="cart">
            <span className="cart-icon" role="img" aria-label="cart icon">
              🛒
            </span>
            <span className="cart-items">{cartItems}</span>
          </div>
        </div>
      </header>

      {/* Product Container */}
      <section className="product-container">
        <div className="container">
          <div className="product-image"></div>
          <div className="product-info-container">
            <h2>Dell Laptop</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="add-to-cart">
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Menu Bar containing FAQ, Contact Us, About Us, and Privacy Policy */}
      <footer className="bottom-bar">
        <div className="container">
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default ProductPage;
