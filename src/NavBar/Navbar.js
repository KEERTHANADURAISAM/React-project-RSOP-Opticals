import React from 'react'
import './Navbar.css';
import imglogo from './rsop logo-01.png';
import { useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
  const navigate=useNavigate();
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
        <li>Home</li>
        <li><Link to="Product" smooth={true} duration={500}>Products</Link></li>
        <li>Accessories</li>
        <li><button className='contact-btn' onClick={NavContact}>Contact us</button></li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar