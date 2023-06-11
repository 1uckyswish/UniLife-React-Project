import React from 'react';
import './Slider.css';
import Banner from '/src/assets/skyline-image.png';
import data from '/src/utils/data.js';

function Slider() {
    console.log(data)
  return (
    <div className='slider-container'>
      <img className='slider-image' src={Banner} alt='Skyline' />
      <div className='slider-header'>
        <h2>Find student homes <br/>with bills included</h2>
        <p>A simple and faster way to search for student accommodation</p>
      </div>
    </div>
  );
}

export default Slider;
