import React from 'react'
import "./BookingModal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
       
function BookingModal({eventHandle, homeData}) {
  return (
    <div className='booking-container'>
      <div className="booking-title">
        <h2>Book a Viewing</h2>
        <FontAwesomeIcon icon={faHouseChimneyUser} />
      </div>
      <div className="booking-address">
        <p>{homeData?.address?.street}, {homeData?.address?.city}, {homeData?.address?.postcode}</p>
      </div>
      <div className="booking-form">
        <div className="booking-form-left">
          <p>Name</p>
          <input type="text" placeholder='Enter Your Name'/>
          <p>Email Address</p>
          <input type="email" placeholder='Enter Your Address'/>
          <p>Phone Number</p>
          <input type="tel" placeholder='Enter Your Number'/>
        </div>
        <div className="booking-form-right">
          <p>Message</p>
          <textarea placeholder='Enter Your Message'></textarea>
          <button onClick={eventHandle}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
