import React from 'react'

import "./Contact.css"; 
import Base from '../Base/Base';
import acutiytestOne from './Screenshot 2023-07-14 124603.png'
import acutiytestTwo from './Screenshot 2023-07-14 123358.png'
import acutiytestThree from './Screenshot 2023-07-14 123840.png'
import glass from'./Screenshot 2023-07-14 132656.png';
import lense from './Screenshot 2023-07-14 132720.png'
import check from './check-up (1).png'
import mobile from './telephone.png'
import email from './email.png'
import watsapp from './whatsapp.png'
import location from './pin.png'
import ContactMedias from './ContactMedias';

const Contact = () => {
  return (
   <Base>
  <div className='contact-main-container'>
    <p className='contact-head'>Our Service</p>
    <p className='contact-sub-head'>What Can We Do</p>
  <p className='contact-sub-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
  <br></br>Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
<div className='contact-Tests'>
  <div className='contact-img-div'>
<img src={acutiytestOne} alt="" className='contact-img'/>
<p className='contact-test-head'>Visual Acuity Test</p>
<p className='contact-content-text'>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
  Beatae,corruptieos quod <br></br>aperiam.Lorem ipsum dolor <br></br>
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
</div>
<div className='contact-img-div'>
<img src={acutiytestTwo} alt="" className='contact-img'/>
<p className='contact-test-head'>Eye Power Check Up</p>
<p className='contact-content-text'>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
  Beatae,corruptieos quod <br></br>aperiam.Lorem ipsum dolor <br></br>
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
</div>
<div className='contact-img-div'>
<img src={acutiytestThree} alt="" className='contact-img'/>
<p className='contact-test-head'>Frame Modification</p>
<p className='contact-content-text'>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
  Beatae,corruptieos quod <br></br>aperiam.Lorem ipsum dolor <br></br>
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
</div>
</div>
<div className='contact-img-div-test'>
<div className='contact-img-div-text'>
<img src={glass} alt=""/>
<p className='contact-text'>Lorem ipsum</p>
</div>
<div className='contact-img-div-text'>
<img src={lense} alt=""/>
<p className='contact-text'>Lorem ipsum</p>
</div>
<div className='contact-img-div-text'>
<img src={check} alt="" className='check-img'/>
<p className='contact-text'>Lorem ipsum</p>
</div>
</div>
</div>
  <div>
    <ContactMedias/>
  </div>

   </Base>
  )
}

export default Contact