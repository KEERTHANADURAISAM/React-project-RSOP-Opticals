import React from 'react'
import './Navbar.css';
import imglogo from './rsop logo-01.png';
const Navbar = () => {
  return (
    <div className='nav-main-div'>
<nav className='navbar-nav'>
<div className='logo-div'>
<img src={imglogo} alt='logo' className='img-logo' />
</div>
    <ul className='nav-ul'>
        <li>Home</li>
        <li>Products</li>
        <li>Accessories</li>
        <li><button className='contact-btn'>Contact us</button></li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar