import { useState } from 'react';
import './Header.css';
import { BsHouses } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ContactModal from '../ContactModal/ContactModal';

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
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

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

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
        <p>Shortlist</p>
        <AiOutlineMail className="header-link-icons" />
        <p onClick={handleModal}>Contact Us</p>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Contact Us Modal">
        <ContactModal eventHandle={handleModal} />
      </Modal>
    </div>
  );
}

export default Header;
