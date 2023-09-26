import React from 'react'
import Base from '../Base/Base'
import './ProductHeader.css'
import { Outlet, useNavigate } from 'react-router-dom'

const ProductHeaders = () => {
    const navigate = useNavigate()
    const ProductOne = () => {
        navigate("ProductPage");
      };
      const ProductTwo = () => {
        navigate("lense");
      };
      const ProductThree= () => {
        navigate("PowerGlasses");
      };
      const ProductFour = () => {
        navigate("SunGlasses");
      };
  return (
<Base>
<div className='product-header-container'>
<label onClick={ProductThree}>Power Glasses</label>
<label onClick={ProductOne}>Designer Frames</label>
<label onClick={ProductTwo}>Lenses</label>
<label onClick={ProductFour} >Sun Glasses</label>
</div>
<Outlet/>
</Base>
  )
}

export default ProductHeaders