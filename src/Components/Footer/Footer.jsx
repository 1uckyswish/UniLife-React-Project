import { useState } from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  const [subscription, setSubscription] = useState(true);
  const [email, setEmail] = useState('');


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
       setSubscription(!subscription);
      setEmail('');
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-container-items">
        <div className="newsletter-container">
          <h2>Keep in touch</h2>
          <p>Curious about new offerings? Sign up for our <br />weekly newsletter and stay informed.</p>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {subscription ? (
            ''
          ) : (
            <p id='success-message'>Done! Thanks for subscribing to our newsletter</p>
          )}
        </div>
        <div className="social-container">
          <h2>Let’s Socialize</h2>
          <div className="social-icons-container">
            <p>
              <BsFacebook className="social-icon" /> Facebook
            </p>
            <p>
              <AiFillTwitterCircle className="social-icon" /> Twitter
            </p>
            <p>
              <AiFillInstagram className="social-icon" /> Instagram
            </p>
          </div>
        </div>
      </div>
      <div className="credits-container">
        <div className="footer-links-container">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookie Policies</p>
        </div>
        <div className="footer-copyright-container">
          <p>2022</p>
          <p>&copy;Unilife</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
