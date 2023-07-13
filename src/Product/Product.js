import React from 'react'
import './Product.css'
import sunglasses from'./Product-img/Screenshot 2023-06-29 140144.png';
import powerglasses from'./Product-img/Screenshot 2023-06-29 140201.png';
import lens from'./Product-img/Screenshot 2023-06-29 140219.png';
const Product = () => {
  return (
    <div id='product'>
        <div className='product-div'>
            <p className='pro-head'>PRODUCTS</p>
            <p className='pro-content'>Hot from last seasons</p>
        </div>
        <div className='pro-imgs'>
            <div className='img-flex'>
            <img src={sunglasses} alt="sunglasses" />
            <p className='img-name'>Sunglass</p>
            </div>
            <div className='img-flex'>
            <img src={powerglasses} alt="powerglasses"/>
            <p className='img-name'>Power Glasses</p>
            </div>
            <div className='img-flex'>
            <img src={lens} alt="lens"/>
            <p className='img-name'>Contact Lenses</p>
            </div>

        </div>
    </div>
  )
}

export default Product