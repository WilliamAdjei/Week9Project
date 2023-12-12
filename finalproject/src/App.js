import logo from './logo.svg';
import './App.css';
import Welcomepage from './Homepage';
import Header from './LearningPage';
import AppHeader from './Components/Header';
import Footer from './Components/Footer';
import PageContent from './Components/PageContainer';
 

function App() {
  return (
    <div className="App">
      

        
        
        <AppHeader/>
        <PageContent/>
        <Footer/>
    </div>
  );
}


export default App;
