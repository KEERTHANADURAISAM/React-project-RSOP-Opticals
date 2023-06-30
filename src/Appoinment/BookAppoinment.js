import React from 'react'
import './BookAppoinment.css';
import bookimg from'./Appoinmentimgs/Screenshot 2023-06-29 142659.png';
import timer from'./Appoinmentimgs/clock.png';
const BookAppoinment = () => {
  return (
    <div className='book-grid-div'>
        <div className='book-img-flex'>
            <img src={bookimg} alt="Book Appoinment" className='book-img'/>
        </div>
        <div className='booking-content'>
<p>Book Appoinment</p><br></br>
<h2 className='book-subhead'>Plan Your Visit Now</h2>
<p className='book-text'>Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam.Lorem ipsum dolor sit amet
consectetur adipisicing elit.Beatae,corruptieos quod aperiam</p>
<button className='btn-book'>Take Appoinment</button>
<div className='book-timing-div'>
<img src={timer} alt="timer" className='timer-img'/>
<p className='book-time-head'>Opening Hours</p>
</div>
<div className='timing-details'>
<div>
<p>Monday-Friday</p><br></br>
<p>Saturday</p><br></br>
<p>Sunday & Holidays</p>
</div>
<div className='timing'>
<p>08.00AM-04.00PM</p><br></br>
<p>10.00AM-19.00PM</p><br></br>
<p>Closed</p>
</div>
</div>
        </div>
    </div>
  )
}

export default BookAppoinment