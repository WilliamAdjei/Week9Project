import './homepage.css'

import { Link} from "react-router-dom";



function HomePage(){

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
   * For this section I used div and h2 tag
   * The reason for using h2 was to create a bold heading for Product Recommendations
   */

  /**
   * Menu Bar containing FAQ, contact us, and privacy policy
   * For this section I used footer, div, ul and li tags.
   * The reason for using footer is to represent data containing copyright information e.g Privacy Policy
   * The reason for using lins is to create links that take you from one pae to another
   */


    return(
        <div className="homepage">
            {/* The Menu bar which contains the Store Name and Cart */}
            
      <header className='storename-header'>
        <div className='link-container'>
          <div className='store-info'>
            <h1 className='store-name'>William's Computer Accessories</h1>
          </div>
          <div className='cart'>
          <span className="cart-icon">🛒</span>
          </div>
        </div>
      </header>


      {/* Menu bar containing sections like Home, Laptops, PC, Gaming Monitors, 
      Accessories, Headsets, Gaming Chairs, Mobile Devices */}
      <nav className='Main-menu'>
        <div className='container'>
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

      {/* Container with a link called Click Here */}
      <div className='click-here-container'>
        <div className='container'>
        <a href="/learningpage" className="click-here-link">Need Help? 
        Click Here</a>
        </div>
      </div>

      {/* Subheading with Product recommendations */}
      <div className='product-recommendations'>
        <div className='container'>
          <h2>Product Recommendations</h2>
          {/* <ProductRecommendations/> */}
        </div>
      </div>

      {/* Menu Bar containing FAQ, contact us, and privacy policy */}
      <footer className='bottom-bar'>
        <div className='container'>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>About Us</li>

            {/* {activePage === 1} &&
            <div>homepage</div>

            {activePage === 2} &&
            <div>learningPage</div>

            {activePage === 3} &&
            <div>quizPage</div>

            {activePage === 4} &&
            <div>productPage</div>

            <button onClick={()=> {activePage(activePage + 1)}}>NEXT PAGE</button> */}

          </ul>
        </div>
      </footer>
    </div>

    )

}

export default HomePage