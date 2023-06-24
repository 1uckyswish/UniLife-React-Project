import { useState, useEffect } from 'react';
import './HomeDetailPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

function HomeDetailPage() {
  const { propertyid } = useParams();
  const [homeData, setHomeData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0)



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
      <div id="take-back-link">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        <p>Back to Search</p>
      </div>
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
        </div>
        <div className="right-detail-container">
          <p>right</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDetailPage;
