import { useState, useEffect, useContext } from 'react';
import './HomeDetailPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import BookingModal from '../../Components/BookingModal/BookingModal';
import { ShortList } from "../../Contexts/ShortList";


function HomeDetailPage() {
  const { propertyid, homeid } = useParams();
  const [homeData, setHomeData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0)
  const [bookingModal, setBookingModal] = useState(false);
  const { favorites, addHome, removeHome } = useContext(ShortList);
  const isFavorite = favorites.find(item => item?._id === homeData?._id);


  function eventHandle(){
    setBookingModal(!bookingModal)
  };

  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "24px",
  },
    overlay:{
      backgroundColor: "rgba(0,0,0,0.6)"
    }
};

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));



  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${propertyid}`)
      .then((result) => {
        console.log(result.data);
        setHomeData(result?.data);
      })
      .catch((error) => console.log(error));
  }, [propertyid]);

  return (
    <div className="home-detail-container">
      <Link to={`/CityDetails/${homeData?.city_id?._id}`} id="take-back-link">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        <p>Back to Search</p>
      </Link>
      <div className="detail-containers">
        <div className="left-detail-container">
          <div className="detail-image-container">
            <div id="big-image-container">
              <img src={homeData?.images?.[imageIndex]}/>
            </div>
            <div id="three-images-container">
              <div className="trio-images">
                <img src={homeData?.images?.[1]} onClick={()=>setImageIndex(1)}/>
              </div>
              <div className="trio-images">
                <img src={homeData?.images?.[2]} onClick={()=>setImageIndex(2)}/>
              </div>
              <div className="trio-images">
                <img src={homeData?.images?.[3]} onClick={()=>setImageIndex(3)}/>
              </div>
               <div className="trio-images">
                <img src={homeData?.images?.[0]} onClick={()=>setImageIndex(0)}/>
              </div>
            </div>
          </div>
          <div className="description-container">
            <h2>Description</h2>
            <p>{homeData?.property_description}</p>
          </div>
          <div className="key-features-container">
            <h2>Key Features</h2>
            <div className="list-features">
              <p><FontAwesomeIcon icon={faCheckCircle} />Great Size Period Property</p>
              <p><FontAwesomeIcon icon={faCheckCircle} />Four / Five Bedrooms</p>
              <p><FontAwesomeIcon icon={faCheckCircle} />Two Reception Rooms</p>
              <p><FontAwesomeIcon icon={faCheckCircle} />OpenPlan Dining Kitchen</p>
              <p><FontAwesomeIcon icon={faCheckCircle} />Two Bath/Shower Rooms & Two WC's</p>
            </div>
          </div>
        </div>
        <div className="right-detail-container">
          <div className="home-detail-card">
            <div className="detail-info-section">
               <span>{homeData?.address?.street}, {homeData?.address?.city}, {homeData?.address?.postcode}</span>
               <div id='single-line'></div>
               <div className="detail-info-icons">
                  <div className="detail-icon-row-one">
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                       <p>Bedrooms</p>
                      </div>
                      <p><FontAwesomeIcon icon={faBed}/><span>{homeData?.bedroom_count}</span></p>
                      </div>
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                        <p>Bathrooms</p>
                      </div>
                       <p><FontAwesomeIcon icon={faBath}/><span>{homeData?.bathroom_count}</span></p>
                      </div>
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                        <p>Property Type</p>
                      </div>
                       <p id='special-font'>{homeData?.property_type}</p>
                      </div>
                  </div>
                  <div className="detail-icon-row-two">
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                       <p>Price</p>
                      </div>
                       <p><FontAwesomeIcon icon={faDollarSign}/><span>{homeData?.rent}</span></p>
                      </div>
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                        <p>Furnished type</p>
                      </div>
                     <p id='special-font'>{homeData?.furnished}</p>
                      </div>
                    <div className="detail-icon-boxes">
                      <div className="detail-icon-box-title">
                        <p>Available from</p>
                      </div>
                      <p id='special-font'>{homeData?.createdAt?.slice(0,10)}</p>
                      </div>
                  </div>
               </div>
            </div>
             <div className="detail-info-buttons">
            <button onClick={isFavorite ? () => removeHome(homeData?._id) : () => addHome(homeData)}>
                      {
                        isFavorite ?
                        <p><FontAwesomeIcon icon={faHeart} className="fav-home" /> Added To ShortList</p>
                        :
                         <p><FontAwesomeIcon icon={faHeart} /> Add To ShortList</p>
                      }
                    </button>
                <button onClick={eventHandle}>Book Viewing</button>
                <Modal
                  isOpen={bookingModal}
                  onRequestClose={eventHandle}
                  style={customStyles}
                  contentLabel="Booking Modal">
                  <BookingModal eventHandle={eventHandle} homeData={homeData}/>
                </Modal>
            </div>
            <div className="bedroom-prices-container">
              <div className="bedroom-container-title">
                <p>Bedroom Prices</p>
              </div>
              <div className="bedroom-row-chart">
                <div className="bedroom-single-row">
                  <p>Bedroom 1</p>
                  <p>{homeData?.bedroom_prices?.bedroom_one} Per Week</p>
                </div>
                <div className="bedroom-single-row">
                  <p>Bedroom 2</p>
                  <p>{homeData?.bedroom_prices?.bedroom_two} Per Week</p>
                </div>
                <div className="bedroom-single-row">
                  <p>Bedroom 3</p>
                  <p>{homeData?.bedroom_prices?.bedroom_three} Per Week</p>
                </div>
                <div className="bedroom-single-row">
                  <p>Bedroom 4</p>
                  <p>{homeData?.bedroom_prices?.bedroom_four} Per Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetailPage;
