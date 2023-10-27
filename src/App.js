import './App.css';
import Intro from './Intro/Intro';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import ProductPage from './Product/ProductPage';
import Lense from './Product/Lense';
import PowerGlasses from './Product/PowerGlasses';
import SunGlasses from './Product/SunGlasses';
import VisionHealth from './Product/VisionHealth';
import ProductHeaders from './Product/ProductHeaders';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Intro/>}/>  
      <Route path='/home' element={<Intro/>}/>
      <Route path='/vision' element={<VisionHealth/>}/>
      <Route path='/contact' element={<Contact/>}/>   
      <Route path='/ProductHeader' element={<ProductHeaders/>}>
          <Route path='ProductPage' element={<ProductPage/>}/>
          <Route index element={<PowerGlasses/>}/>
          <Route path='lense' element={<Lense/>}/>
          <Route path='PowerGlasses' element={<PowerGlasses/>}/>
          <Route path='SunGlasses' element={<SunGlasses/>}/>
          
        </Route>
           
        </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
