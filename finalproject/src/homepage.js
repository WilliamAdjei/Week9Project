import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './homepage.css';
import LearningPage from './learningpage';


/** 

   * Menu Bar for Store Name and Cart
   * In this file I am naming the divs, header, span and h1 needed for the Menu Bar  
   * containing the Store Name and Cart. 

   * The H1 acts like a label at the top of the page, the divs are for  
   * grouping sections of the website together to style it. 

   * The span divs are used to group elements of the page together to style them 
   */ 

 

 

  /** 

   * Menu bar containing sections like Home, Laptops, PC, Gaming Monitors 

   * For this section I used the nav, div, ul and li tags. 

   * The reason for using the div tag is to name the container that will hold the categories of products 

   * The reason for using the nav tag is to create a navigation menu 

   * The reason for using the ul and li tags is to create an item list which is part of an unordered or ordered list 

   */ 

 

 

  /** 

   * Container with a link called Click Here 

   * For this section I used div and a tags 

   * The reason for using the a tags is to create a link that takes you from one page to another when clicked on 

   */ 

 

 

  /** 
   * Subheading with Product recommendations 
   * For this section I used div and h2 tag, <p>, <h3>
   * The reason for using h2 was to create a bold heading for Product Recommendations.
   *I used <p> to add items description for the laptops a user would look to purchase.
   */ 

 

  /** 

   * Menu Bar containing FAQ, contact us, and privacy policy 

   * For this section I used footer, div, ul and li tags. 

   * The reason for using footer is to represent data containing copyright information e.g Privacy Policy 

   * The reason for using li tags is to create links that take you from one pae to another 

   */

 

function HomePage() {

 
 
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
          </div>
        </div>
      </header>

      

      {/* Menu bar containing Home, Laptops, PC, Gaming Monitors, Accessories, Headsets, Gaming Chairs, Mobile Devices */}
      <nav className="main-menu">
        <div className="container">
          <ul>
            <li>Home</li>
            <li>Laptops</li>
            <li>PC</li>
            <li>Gaming Monitors</li>
            <li>Accessories</li>
            <li>Headsets</li>
            <li>Gaming Chairs</li>
            <li>Mobile Devices</li>
          </ul>
        </div>
      </nav>

      {/* Container with a link called "Click Here" */}
      <section className="click-here-container">
        <div className="container">
        <Link to="./learningpage">Need Help? Click Here</Link>
        </div>
      </section>

      {/* Subheading with Product Recommendations */}
      <section className="product-recommendations">
        <div className="container">
          <h2>Product Recommendations</h2>
          <div className="product-list">
            {/* Laptop Recommendations */}
            <div className="product-item">
              <h3>Brand: Dell</h3>
              <p>Color: Silver</p>
              <p>Model: Inspiron 15</p>
              <p>Screen Size: 15.6 inches</p>
              <p>Description: A powerful laptop for everyday use.</p>
            </div>
            {/* Repeat similar blocks for other laptop recommendations */}
          </div>
        </div>
      </section>

  


      {/* Menu Bar containing FAQ, Contact Us, Help, and Privacy Policy */}
      <footer className="bottom-bar">
        <div className="container">
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}



export default HomePage
