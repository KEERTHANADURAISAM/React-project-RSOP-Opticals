import React from 'react'
import Base from '../Base/Base'
import './Lense.css'
import lense from './Product-img/shutterstock_2132619377-461x355-1.jpg';
import view from './Product-img/precision-view-logo.jpg';
const Lense = () => {
  return (
    
    <div className='lense-bg-div'>
      <div className='lense-header-div'>
        <h1 className='lense-header'>Lenses</h1>
        <p className='lense-header-content'>The most important thing to consider about your eyeglasses isn’t how they look or feel on your face – it’s the quality of the lenses!</p>
      </div>
    <div className='lense-main-grid'>
      <div>
<img src={lense} alt=""/>
<div className=''>
<h2 >Precision View HD</h2>
<p className='lense-subcontent'>
Meet this addition to the Site for Sore Eyes collection – sophisticated superior optics in a full back side digital lens design. Nearly 63% of patients prefer the Precision View HD lens, which offers quick adaption, a wider field of vision, and what may ultimately be called ‘effortless vision’ to those who choose it.

For eye care patients who suffer from astigmatism, the Precision View HD is a dream come true. The soft and symmetrical design of the lens allows both eyes to work together, smoothing the levels of astigmatism. Do you have astigmatism? Try Precision View HD and see what effortless vision, quick adaption, and having a wider field of vision are all about</p>
</div>
</div>

<div className='lense-content-div'>
  <h1 className='lense-content-header'>Top Quality Optical Lenses</h1>
  <p className='lense-maincontent'>
At Site for Sore Eyes, we use only top optical lenses, along with the most advanced technology to make sure your eyeglasses are a perfect match for your vision – every time.

At some of our locations, we can fill your prescription in an hour. And, if your prescription changes, simply bring your glasses back in to us.</p>

<div className='main-content-view'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXIPeLvaNNcT5ADFSX5SN0SSc9NJQi6mAGA&usqp=CAU' alt="" className='lense-img'/>
</div>
</div>
</div>


</div>

    

  )
}

export default Lense