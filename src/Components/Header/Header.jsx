import React from 'react'
import './Header.css'
import { BsHouses } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <Link to="/">
      <div className="title-container">
         <BsHouses className='title-icon'/>
          <h2>UniLife</h2>
      </div>
      </Link>
      <Link to="/CityDetails"><button>Test for byron</button></Link>
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
