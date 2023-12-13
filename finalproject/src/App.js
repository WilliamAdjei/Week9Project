import './App.css';

function App() {
  return (
    <div className="App">
      
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


      {/* Menu bar containing sections like Home, Laptops, PC, Gaming Monitors, Accessories, Headsets, Gaming Chairs, Mobile Devices */}
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
        <a href="/click-here" className="click-here-link">Need Help? 
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
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

