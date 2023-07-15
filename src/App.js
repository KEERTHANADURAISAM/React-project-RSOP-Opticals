import './App.css';
import Intro from './Intro/Intro';
import Navbar from './NavBar/Navbar';
import About from './AboutUs/About';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Product from './Product/Product';
import BookAppoinment from './Appoinment/BookAppoinment';
import Footer from './Footer/Footer';
import Base from './Base/Base';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Intro/>}/>  
        <Route path='/contact' element={<Contact/>}/>        
        
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
