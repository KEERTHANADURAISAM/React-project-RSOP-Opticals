
import './App.css';
import Intro from './Intro/Intro';
import Navbar from './NavBar/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        {/* <Route path='/' element={<Intro/>}/> */}
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
