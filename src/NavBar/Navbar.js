import React from 'react'
import './Navbar.css';
import imglogo from './logo.jpg';
import { useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
  const navigate=useNavigate();
  const HomePage=()=>{
    navigate('/home')
  }
  const NavContact=()=>{
    navigate('/contact')
  }
  return (
    
<div className='nav-main-div'>
<nav className='navbar-nav'>
<div className='logo-div'>
<img src={imglogo} alt='logo' className='img-logo' onClick={()=>scroll.scrollToTop()}/>
</div>
    <ul className='nav-ul'>
        <li onClick={HomePage}>Home</li>
        <li>Products</li>
        <li>Accessories</li>
        <li><button className='contact-btn' onClick={NavContact}>Contact us</button></li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar