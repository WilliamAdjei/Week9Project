import logo from './logo.svg';
import './App.css';
import Welcomepage from './Pages/Homepage';
import Header from './LearningPage';
import AppHeader from './Components/Header';
import Footer from './Components/Footer';
import PageContent from './Components/PageContainer';
import Navbar from './Navbar';
import Pricing from './Pages/Pricing';
import AboutPage from './Pages/About';
import Home from './Pages/Homepage';
import HOMEPAGE from './homepage';

 

function App() {
  let Components
  switch(window.location.pathname){
    case "/":
      Components = Home
    break
    case "/pricing":
      Components = Pricing
      break
      case "/about":
        Components = AboutPage
        break


  }
  return (
    <div className="App">
      

      
      
      <Navbar/>
      <div className='container'>{Components}</div>
      
        <HOMEPAGE/>
        <AppHeader/>
        <PageContent/>
        <Footer/>
    </div>
  );
}


export default App;
