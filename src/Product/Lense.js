import React from 'react'
import Base from '../Base/Base'
import './Lense.css'
import lense from './Product-img/shutterstock_2132619377-461x355-1.jpg';
import view from './Product-img/precision-view-logo.jpg';
const Lense = () => {
  return (
    <Base>
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
<p>
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
<img src={view} alt=""/>
</div>
</div>
</div>

<div className='lense-details-maindiv'>
  <div>
  <h2>Thinner and Lighter Lenses</h2>
  </div>
<div className='lense-details-maingrid'>
<div className='lense-details-subgrid'>
  <div>
<div>
  <h3>Polycarbonate</h3>
  <p>
Our most affordable thin lens, polycarbonate is the ideal mentalhealthdrugs.com lens choice for both rimless and semi-rimless frames. Polycarbonate is 20%-25% thinner and up to 30% lighter than conventional lenses.</p>
</div>
<div>
  <h3>Hyper Index 1.67</h3>
  <p>
These extra thin and light lenses are designed for high prescriptions. Hyper Index 1.67 is approximately 40% thinner and lighter than conventional plastic lenses and has very good optical characteristics.</p>
</div>
<div>
  <h3>Trivex</h3>
  <p>
This is the strongest and most durable of all thin lenses. The very low specific gravity also makes this the lightest lens you can possibly get. The best choice for rimless and semi-rimmed frames, Trivex is 30% thinner than conventional plastic and features the best optics of all thinner and lighter lenses.</p>
</div>
<div>
  <h3>Anti-Reflective</h3>
  <p>
We offer a variety of anti-reflective lenses to fit every budget and use. Ask your Site for Sore Eyes sales associate to describe the features and benefits of the various anti-reflective lenses offered.</p>
</div>
</div>
</div>
<div className='lense-details-subgrids'>
<div>
  <h3>Hi Index 1.60</h3>
  <p>
Similar in thickness and weight to polycarbonate but with superior optics, Hi Index 1.60 is a good choice for medium-to-medium/high prescriptions. And, these lenses can fit into both metal and acetate frames.</p>
</div>
<div>
  <h3>Extra High Index 1.74</h3>
  <p>
Ideal for the strongest prescriptions, this is the thinnest and lightest lens offered in the U.S. Extra High Index 1.74 is up to 50% thinner than conventional plastic lenses.</p>
</div>
<div>
  <h3>Photochromic</h3>
  <p>
This group includes all varieties of Transitions® Signature™ VII Lenses and PhotoFusion® by Carl Zeiss. Go from virtually clear (when inside) to quite dark (when outside) in seconds.</p>
</div>
</div>
</div>
</div>
</div>

    </Base>

  )
}

export default Lense