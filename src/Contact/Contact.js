import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import "./Contact.css"; 
import Base from '../Base/Base';
import acutiytestOne from './Screenshot 2023-07-14 124603.png'
import acutiytestTwo from './Screenshot 2023-07-14 123358.png'
import acutiytestThree from './Screenshot 2023-07-14 123840.png'
import glass from'./Screenshot 2023-07-14 132656.png';
import lense from './Screenshot 2023-07-14 132720.png'
import check from './check-up (1).png'

import ph from './telephone.png'
import location from './pin.png'
import watsapp from './whatsapp.png'
import email from './email.png'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_08xamoh";
    const templateId = "template_dihgyrv";
    const publicKey = "Cy4bJnADDYybIP7QK";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Harini Opticals",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
   <Base>
   <form onSubmit={handleSubmit}>
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
<div className='get-msg-main-div'>
        <div className='get-inputbox'>
        <p className='get-head'>Get In Touch With Us</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
  <br></br>Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.<br></br>Beatae,corruptieos quod aperiam</p>
<input  className='input-box'
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}/>
<input className='input-box'
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}/>
<textarea  cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}className='textarea-box'/>
<button type='submit' className='send-btn'>Send</button>
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
    </form>
    

   </Base>
  )
}

export default Contact