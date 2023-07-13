import React from 'react'
import Navbar from '../NavBar/Navbar'
import Intro from '../Intro/Intro'
import About from '../AboutUs/About'
import Product from '../Product/Product'
import BookAppoinment from '../Appoinment/BookAppoinment'
import Footer from '../Footer/Footer'
import  './Base.css'

const Base = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='children-position'>
          {children}
        </div>
        <Footer/>
       
    </div>
  )
}

export default Base