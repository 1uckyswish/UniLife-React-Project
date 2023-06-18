import {useState} from 'react'
import './Header.css'
import { BsHouses } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MailIcon from "/src/assets/contact-mail.png"

function Header() {
  //* create state to control modal
  const [isModalOpen, setModalOpen] = useState(false);
  //* modal styles
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
};

//* event handler
const handleModal = ()=>{
  setModalOpen(!isModalOpen)
};

  Modal.setAppElement(document.getElementById('root'));

  return (
    <div className='header-container'>
      <Link to="/">
      <div className="title-container">
         <BsHouses className='title-icon'/>
          <h2>UniLife</h2>
      </div>
      </Link>
      <div className='header-links'>
        <AiOutlineHeart className='header-link-icons'/>
        <p>Shortlist</p>
        <AiOutlineMail className='header-link-icons'/>
        <p onClick={handleModal}>Contact Us</p>
      </div>
       <Modal isOpen={isModalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Contact Us Modal">
          <div className='contact-container'>
            <div className='contact-header'>
              <h2>Contact Us</h2>
              <img src={MailIcon} alt='mailbox' />
            </div>
             <p>Feel free to contact us if you have any questions. <br/>Looking forward to hear from you.</p>
            <div className='contact-form-container'>
              <div className='form-container-1'>
                <p>Name</p>
                <input type="text" placeholder='Enter You Name'/>
                <p>Phone</p>
                <input type="text" placeholder='Enter You Name'/>
                <p>Are you a...</p>
                <input type="text" placeholder='Enter You Name'/>
              </div>
              <div className='form-container-2'>
                <p>Email</p>
                <input type="text" placeholder='Enter You Name'/>
                <p>Message</p>
                <textarea placeholder='Enter You Message'/>
                <button>Submit</button>
              </div>
            </div>
          </div>
      </Modal>
    </div>
  )
}

export default Header
