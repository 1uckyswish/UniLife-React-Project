import "./PropertyCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function PropertyCard({card}) {
  return (
    <div className='single-property-card'>
          <img src={card?.images[0]} />
        <div className='property-info-container'>
            <div className='property-info'>
               <p><FontAwesomeIcon icon={faDollarSign} />{card?.rent}</p>
               <div className="property-icons">
                <FontAwesomeIcon icon={faBed} />
                <p>{card?.bedroom_count}</p>
                <FontAwesomeIcon icon={faBath} />
                <p>{card?.bathroom_count}</p>
               </div>
            </div>
            <p id='price-sub-text'>pppm including bills</p>
        </div>
        <div className="property-detailed-info-container">
          <div className="property-type-container">
            <h3>{card?.property_type}</h3>
            <h3>{card?.furnished}</h3>
          </div>
          <div className="property-address">
             <FontAwesomeIcon icon={faMapPin} />
            <p>{card?.address.street}, {card?.address.city}, {card?.address.postcode}</p>
          </div>
        </div>
         <Link to={`/HomeDetailPage/${card?._id}`}>
           <button>
          <FontAwesomeIcon icon={faHouseChimney} />
          <p>View Home</p>
          </button>
         </Link>
    </div>
  )
}

export default PropertyCard