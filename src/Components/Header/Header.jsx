import { useState } from 'react';
import './Header.css';
import { BsHouses } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ContactModal from '../ContactModal/ContactModal';
import { Squeeze as Hamburger } from 'hamburger-react'
function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(true);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '24px',
    },
    overlay:{
      backgroundColor: "rgba(0,0,0,0.6)"
    }
  };

  const blockStyle = {
    display: 'block',
  };

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleHamburger = ()=>{
    setHamburgerOpen(!hamburgerOpen)
  }

  function handleClick() {
  handleModal();
  handleHamburger();
}


  Modal.setAppElement(document.getElementById('root'));

  return (
    <div className="header-container">
      <Link to="/">
        <div className="title-container">
          <BsHouses className="title-icon" />
          <h2>UniLife</h2>
        </div>
      </Link>
      <div className="header-links">
        <AiOutlineHeart className="header-link-icons" />
        <Link to="/ShortList">
        <p className="header-link-icons">Shortlist</p>
        </Link>
        <AiOutlineMail className="header-link-icons" />
        <p onClick={handleModal} className="header-link-icons">Contact Us</p>
        <div className='hamburger' onClick={handleHamburger}>
          <Hamburger easing="ease-in" />
        </div>
        {
        hamburgerOpen?
          <div className='hamburger-menu'>
          </div>
          :
          <div style={blockStyle} className='hamburger-menu'>
            <div id="nav-links">
              <Link to="/ShortList" onClick={handleHamburger}><p>Shortlist</p></Link>
               <p onClick={handleClick}>Contact Us</p>
               <Link to="/CityDetails/633a96a66893d471a68cc88d"><p onClick={handleHamburger}>Top Searched City</p></Link>
               <Link to="/HomeDetailPage/6364c5fdfff841b8724bacc9"><p onClick={handleHamburger}>Trending Home</p></Link>
               <Link to="/SeeAllCities"><p onClick={handleHamburger}>See All Cities</p></Link>
            </div>
          </div>
        }
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Contact Us Modal">
        <ContactModal eventHandle={handleModal} />
      </Modal>
    </div>
  );
}

export default Header;
