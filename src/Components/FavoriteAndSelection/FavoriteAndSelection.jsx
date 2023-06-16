import React from 'react';
import "./FavoriteAndSelection.css";
import CroppedImage from "/src/assets/single-person.png";
import HeartImage from "/src/assets/heart-outline.png";
import SelectionImage from "/src/assets/selection-icon.png";

function FavoriteAndSelection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional smooth scrolling animation
    });
  };

  return (
    <div className='favorites-details-container'>
      <div className="favorites-details-icons">
        <img src={SelectionImage} alt='heart' />
        <img src={HeartImage} alt='selection'/>
      </div>
      <div className="favorites-details-info">
        <h3>Best Selection</h3>
        <p>Best selection of student accommodations.<br/> Never been easier to find a home that’s <br/>right for you.</p>
        <h3>Your favorite</h3>
        <p>Shortlist your favourite properties and send <br/> enquiries in one click.</p>
        <button onClick={scrollToTop}>Search & Compare</button>
      </div>
      <div className="favorites-image-container">
        <img src={CroppedImage} alt="single" />
      </div>
    </div>
  );
}

export default FavoriteAndSelection;
