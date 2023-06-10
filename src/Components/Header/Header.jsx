import React from 'react'
import './Header.css'
import { BsHouses } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";

function Header() {
  return (
    <div className='header-container'>
      <div className="title-container">
          <BsHouses className='title-icon'/>
          <h2>UniLife</h2>
      </div>
      <div className='header-links'>
        <AiOutlineHeart className='header-link-icons'/>
        <p>Shortlist</p>
        <AiOutlineMail className='header-link-icons'/>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Header
