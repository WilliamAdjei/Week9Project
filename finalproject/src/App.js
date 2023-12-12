import logo from './logo.svg';
import './App.css';
import Welcomepage from './Pages/Homepage';
import Header from './LearningPage';
import AppHeader from './Components/Header';
import Footer from './Components/Footer';
import PageContent from './Components/PageContainer';
import Navbar from './Navbar';
 

function App() {
  return (
    <div className="App">
      

      
      <Navbar/>
        
        <AppHeader/>
        <PageContent/>
        <Footer/>
    </div>
  );
}


export default App;
