import React, { useState } from 'react'
import './Cards.css'
import { data } from './Data'
const Cards = () => {
const [content,setcontent]=useState(data);
console.log(content);
  return (
    <div className='grid-card-container'>  
    <div className='grid-card-design'>
<div className="avatar"></div>
<p className='card-header'>Eye Care</p>
<p className='card-content'>Lorem ipsum dolor sit<br></br>amet
consectetur<br></br> adipisicing elit.<br></br> 
Beatae,corruptieos quod aperiam</p>
</div> 
<div className='grid-card-design'>
<div className="avatar"></div>
<p className='card-header'>Eye Care</p>
<p className='card-content'>Lorem ipsum dolor sit<br></br>amet
consectetur<br></br> adipisicing elit.<br></br> 
Beatae,corruptieos quod aperiam</p>
</div> 
<div className='grid-card-design'>
<div className="avatar"></div>
<p className='card-header'>Eye Care</p>
<p className='card-content'>Lorem ipsum dolor sit<br></br>amet
consectetur<br></br> adipisicing elit.<br></br> 
Beatae,corruptieos quod aperiam</p>
</div> 
<div className='grid-card-design'>
<div className="avatar"></div>
<p className='card-header'>Eye Care</p>
<p className='card-content'>Lorem ipsum dolor sit<br></br>amet
consectetur<br></br> adipisicing elit.<br></br> 
Beatae,corruptieos quod aperiam</p>
</div> 
     
    </div>
  )

}

export default Cards