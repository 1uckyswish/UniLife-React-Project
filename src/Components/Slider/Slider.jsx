import React from 'react';
import './Slider.css';
import Banner from '/src/assets/skyline-image.png';

function Slider({data}) {
  const { title, description } = data;

  return (
    <div className='slider-container'>
      <img className='slider-image' src={Banner} alt='Skyline' />
      <div className='slider-header'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Slider;
