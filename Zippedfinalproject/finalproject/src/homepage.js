import React, { useState } from 'react';
import './homepage.css';
import LearningPage from './learningpage';
import DellLaptop from "./images/Dell Inspiron.jpg"
import dell from "./images/Dell Inspiron 3542.jpg"
import SamsungGalaxy from "./images/Samsung Galaxy A8.jpg"


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

   * The reason for using li tags is to create links that take you from one page to another 

   */

 

function HOMEPAGE() {

  //Creating a UseStateof the Cart Items
  
  /**
   * Setting the count to 0 so when an item is added it goes up by 1
   */
  const [ItemsBasket, setItemsBasket] = useState(0);

 //Add to Cart function that increases by 1 when an item is added
  const AddingToBasket = () => {
    setItemsBasket(ItemsBasket + 1);
  };
 
  return (

    <div className="App">
      {/* Contains store Name and the cart Information */}

      <header className="webapp-header">
        <div className="container">
          <div className="info-webapp">
            <h1 className="website-name">William's Computer Accessories</h1>
          </div>
          <div className="basket">
            <span className="basket-icon" role="img" aria-label="basket icon">
              🛒
            </span>
            <span className="basket-items">{ItemsBasket}</span>
          </div>
        </div>
      </header>

      

      {/* What the menu bar contains */}
      <nav className="mainMenu-bar">
        <div className="container">
          <ul>
            <li>Home</li>
            <li>Laptops</li>
            <li>PC</li>
            <li>Accessories</li>
            <li>Tablets</li>
          </ul>
        </div>
      </nav>

      {/* What Link container has in it */}
      <section className="container-click-here">
        <div className="container">
        <a href='./learningpage.js'>Need Help? Click Here</a>
        </div>
      </section>

      {/* Recommendation for Products Section */}
      <section className="recommending-products">
        <div className="container">
          <h2>Recommendations Of Items/Products</h2>
          <div className="lists-Product">
            {/* Laptops You Might Be Interested In */}
            <div className="product-item">
              <h3>Brand: Dell</h3>
              <p>Color: Silver</p>
              <p>Model: Inspiron 15</p>
              <p>Screen Size: 15.6 inches</p>
              <p>Description: An impressive and powerful laptop helping and assisting your everyday use.</p>
              <img src={DellLaptop} width={300} height={200}></img>
              <button onClick={AddingToBasket}>Add to Basket</button>

              <h3>Brand: Dell </h3>
              <p>Color: Black</p>
              <p>Model: Inspiron 3542</p>
              <p>Screen Size: 15.6 inches</p>
              <p>Description: A modern, thoughtful design. Designed to last through regular use</p>
              <p>An inspiring new look and feel makes for a calmer desktop. 
                Snap assistant helps focus your workflow while desktops allow you to organise your open windows.</p>
              <img src={dell} width={300} height={200}></img>
              <button onClick={AddingToBasket}>Add to Basket</button>

              <h3>Brand: Samsung</h3>
              <p>Color: Black</p>
              <p>Model: Samsung Galaxy A8</p>
              <p>Screen Size: 10.5 inches</p>
              <p>Description: This thin and light Samsung Galaxy A8 tablet is perfect for taking your 
                entertainment on the go.</p>
              <img src={SamsungGalaxy} width={300} height={200}></img>
              <button onClick={AddingToBasket}>Add to Basket</button>
              
            </div>
          </div>
        </div>
      </section>

  


      {/* Items within the bottom Bar Menu */}
      <footer className="bottom-bar">
        <div className="container">
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Help</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}



export default HOMEPAGE
