import React from 'react'
import './Intro.css'
import img1 from './images/Fashionable-Women-Wearing-Sunglasses-PNG.png'
import Cards from '../Cards/Cards'
const Intro = () => {
  return (
    <div>
            <div className="grid-container">
     <div className='grid-div'>
        <h6>Improdev Vision An Improdev Life </h6><br/>
        <h2 className='head-content'>You Eyes Were<br/>
          Closed,They're Open <br/>
          Now.</h2>
          <button className='btn-intro'>Visit Our Shop</button>
          </div>
      <div className='intro-img-div'>
        <img src={img1} className='intro-img'/>
      
       </div>
      
    </div>
    <div className='Card-position'>
    <Cards/>
    </div>  
    </div>
  )
}

export default Intro