import './App.css';
import Cards from './Cards/Cards';
import Intro from './Intro/Intro';
import Navbar from './NavBar/Navbar';
import About from './AboutUs/About';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Product from './Product/Product';
import BookAppoinment from './Appoinment/BookAppoinment';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Navbar/>}/> */}
        {/* <Route path='/' element={<Intro/>}/>   */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Navbar/>
      <Intro/>
      {/* <Cards/> */}
    <About/>
    <Product/>
    <BookAppoinment/>
    <Footer/>
    
    </div>
  );
}

export default App;
