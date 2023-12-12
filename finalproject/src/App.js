import logo from './logo.svg';
import './App.css';
import Welcomepage from './Homepage';
import Header from './LearningPage';
 

function App() {
  return (
    <div className="App">
      

        
        
        <AppHeader/>
        <PageContent/>
        <Footer/>
    </div>
  );
}

function AppHeader(){
  return(
    <div className='appHeader'>Header</div>
  )
}

function Footer(){
  return(
    <div className='appFooter'>Footer</div>
  )
}

function PageContent(){
  return(
    <div className='page-container'>PageContent</div>
  )
}
export default App;
