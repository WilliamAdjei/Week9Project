import React, { useState } from 'react';
import './productPage.css'
import laptop from "./images/Dell Latitude 9430.webp"
import tablet from "./images/Samsung Galaxy tab a8.jpg"

function BuyProduct() {
  //Creating a UseStateof the Cart Items
  /**
   * Setting the count to 0 so when an item is added it goes up by 1
   */
  const [itemsBasket, setItemsBasket] = useState(0);

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
  const addingToBasket = () => {
    setItemsBasket(itemsBasket + 1);
  };

  return (
    <div className="App">
      {/* Contains store Name and the cart Information on menu bar */}
      <header className="webapp-header">
        <div className="container">
          <div className="info-webapp">
            <h1 className="website-name">William's Computer Accessories</h1>
          </div>
          <div className="basket">
            <span className="basket-icon" role="img" aria-label="cart icon">
              🛒
            </span>
            <span className="basket-items">{itemsBasket}</span>
          </div>
        </div>
      </header>

      {/* What the products will contain */}
      <section className="holder-product">
        <div className="container">
          <div className="picture-produc"></div>
        </div>
      </section>

      {/* where the information of the Products will be */}
      <section className="description-product-container">
        <div className="container">
          <h2>Dell Laptop 9430</h2>
          <h3>About This Item</h3>
          <p>
          The Latitude 9430 blends style and business. Its dark gray chassis is all metal and of very high quality. 
          None of its surfaces flex even under strong pressure.
          Dell's Latitude 9430 2-in-1 packs the right features for a premium business laptop, 
          including a premium build, battery life, and more.
          </p>
          <p>
          It is a powerful and efficient laptop in an excellent condition.
          </p>
          <img src={laptop} width={300} height={200}></img>
          <div className="add-to-basket">
            <button onClick={addingToBasket}>Add to Basket</button>
          </div>

          <h2> Samsung Galaxy Tab a8</h2>
          <h3>About This Item</h3>
          <p>This tablet has many features. It also comes with a pen that you can use to make notes</p>
          <p>Playful aesthetics with a touch of style: the Galaxy Tab A8 has a lively mood and a youthful look.</p>
          <p>The Galaxy Tab A8 Tablet PC is designed to give you an  immersion.
            Even when you are on the go, the tablet PC Galaxy Tab A8 opens up an immersive universe of content 
            and games and activities that young people love.</p>
          <img src={tablet} width={300} height={200}></img>

          <div className="add-to-basket">
            <button onClick={addingToBasket}>Add to Basket</button>
          </div>
        </div>
      </section>

      {/* Information the bottom bar will hold*/}
      <footer className="lowestpart-bar">
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

export default BuyProduct;