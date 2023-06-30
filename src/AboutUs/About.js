import React from 'react'
import './About.css';
import aboutimg from './Aboutimages/Screenshot 2023-06-29 123400.png'
const About = () => {
  return (
    <div className='about-grid'>
        <div>
        <img src={aboutimg} alt="About" className='about-img'/>
        </div>
        <div className='about-content-div'>
            <p className='about-mainhead'>ABOUT US</p>
            <p className='about-subhead'>Style Yourself With The<br></br>Best Lens</p>
            <p className='About-content'>Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam</p>
<button className='about-btn'> About Us</button>
        </div>
    </div>
  )
}

export default About


