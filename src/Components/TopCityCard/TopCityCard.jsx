import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopCityCard({ topCity, special }) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const cardStyle = {
    position: 'relative',
    width: windowWidth >= 600 ? '100%' : 'auto',
    height: windowWidth >= 600 ? '300px' : '280px', // Adjust the height based on the screen width
    borderRadius: '24px',
    overflow: 'hidden',
  };

const imageStyle = {
  backgroundImage: topCity?._id === special?._id
    ? `url('https://images.unsplash.com/photo-1630344353375-2f744504def3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    : `url(${topCity?.image_url})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  filter: 'brightness(0.8)',
  transition: 'transform 0.3s',
  transform: isHovered ? 'scale(1.3)' : 'scale(1)',
};


  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the color and opacity of the overlay
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1, // Ensure the text is positioned above the background image
  };

  const headerStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  return (
    <Link
      to={`CityDetails/${topCity?._id}`}
      className="grid-photo-item"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageStyle}></div>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headerStyle}>{topCity?.name}</h2>
        <p style={paragraphStyle}>{topCity?.property_count} Properties</p>
      </div>
    </Link>
  );
}

export default TopCityCard;
