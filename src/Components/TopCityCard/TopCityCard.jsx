import { useState, useEffect } from 'react';

function TopCityCard({ topCity }) {
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
    width: '100%',
    height: windowWidth >= 600 ? '100%' : '120%', // Adjust the height based on the screen width
    borderRadius: '24px',
    overflow: 'hidden',
  };

  const imageStyle = {
    backgroundImage: `url(${topCity?.image_url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    filter: 'blur(0.8px) brightness(0.8)', // Adjust brightness to make the background slightly darker
    transition: 'transform 0.3s', // Add transition for smooth effect
    transform: isHovered ? 'scale(1.3)' : 'scale(1)', // Apply the zoom effect when hovered
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
    <div
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
    </div>
  );
}

export default TopCityCard;
