import React from 'react'
import Navbar from '../NavBar/Navbar'
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