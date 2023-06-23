import React from 'react';
import "./PropertyCard.css";
import Bed from "/src/assets/bedroom-icon.png";
import Shower from "/src/assets/shower-icon.png";

function PropertyCard({card}) {
  return (
    <div className='single-property-card'>
          <img src={card?.images[0]} />
        <div className='property-info-container'>
            <div className='property-info'>
               <p>${card?.rent}</p>
               <div className="property-icons">
                <img src={Bed}/>
                <p>{card?.bedroom_count}</p>
                <img src={Shower} />
                <p>{card?.bathroom_count}</p>
               </div>
            </div>
            <p>pppw including bills</p>
        </div>
    </div>
  )
}

export default PropertyCard