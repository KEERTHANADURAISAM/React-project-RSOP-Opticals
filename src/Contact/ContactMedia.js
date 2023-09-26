import React from 'react'
import './Cont.css'

const ContactMedias = () => {
  return (
    <div className='main-grid'>
        <div className='get-inputbox'>
        <p className='get-head'>Get In Touch With Us</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
  <br></br>Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
<input type='text' placeholder='Name' className='input-box'/>
<input type='text' placeholder='E-mail'className='input-box'/>
<textarea type='text' placeholder='Comment'className='textarea-box'/>
<button className='send-btn'>Send</button>
        </div>
            <div className='subgrid-contact'>
<div className='media-details'>
    <img src={ph} alt='' className='media-icons'/>
    <p>Phone-Number</p>
    <p>9078564534</p>
    <div className='media'>
    <img src={email} alt='' className='media-icons'/> 
    <p>Email-address</p>
<p>hariniopticals@gmail.com</p>
    </div>
</div>
<div className='media-details'>
<img src={watsapp} alt='' className='media-icons'/>
<p>Watsapp Number</p>
<p>8122077789</p>
<div className='media'>
<img src={location} alt=" " className='media-icons'/>
<p>Our Location</p>
<p>Harini||Opticals</p>
<p>393,kamarajar road,peelamedu post</p>
<p>coimbatore-641004</p>
</div>
</div>
    </div>
    </div>

  )
}

export default ContactMedias