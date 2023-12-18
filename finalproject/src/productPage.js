import React, { useState } from 'react';
import './App.css';

function ProductPage() {
  //Creating a UseStateof the Cart Items
  /**
   * Setting the count to 0 so when an item is added it goes up by 1
   */
  const [cartItems, setCartItems] = useState(0);

  //Add to Cart function to add the items to the basket
  /**
   * Cart items by 1 means when item is added it shows in the basket
   */

  /**
   * Menu bar containing Store Name and Cart
   * In this part I am naming the <divs>, <header>, <span> and <h1> needed for the Menu Bar 
   * containing the Store Name and Cart.
   * The H1 acts like a label at the top of the page, the divs are for 
   * grouping sections of the website together to style it.
   * The span divs are used to group elements of the page together to style them.
   * It contains the image used to represent the basket. It also stores the cartitem function
   */

  /**
   * Product Container
   * In this section I am using the <section> and <div> tags.
   * The section is used to name the container that will ontain the product
   * The div will be used for the image of the product
   */

  /**
   * Product Info Container
   * In this section I am using a <section>, <div>, <h2>, <p> tags
   * The section will be used to create a container container the product info.
   * The h2 is used to create a Title
   * The p tag is used to create text for the paragraph containing the information about the product
   */

  /**
    * Bottom Menu Bar containing FAQ, Contact Us, About Us, and Privacy
    * For this section I used <footer>, <div>, <ul>, <li>
    * <ul> and <li> are to create an ordered list that appears on the page.
    * The <div> is to create a container that contains the elements on the page.
    * The reason for using footer is to represent data containing important information e.g Contact Us
   */
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
        </div>
      </section>

      {/* Product Info Container */}
      <section className="product-info-container">
        <div className="container">
          <h2>Dell Laptop</h2>
          <p>
            This dell latop has a 14 inch display.
          </p>
          <div className="add-to-cart">
            <button onClick={addToCart}>Add to Cart</button>
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

