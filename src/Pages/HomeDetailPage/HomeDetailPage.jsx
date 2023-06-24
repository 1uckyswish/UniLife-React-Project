import {useState, useEffect} from 'react'
import "./HomeDetailPage.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'

function HomeDetailPage() {
  const { propertyid } = useParams();
  const [homeData, setHomeData] = useState([]);

  useEffect(
    ()=>{
      axios.get(`https://unilife-server.herokuapp.com/properties/${propertyid}`)
      .then((result)=>{
        console.log(result.data);
        setHomeData(result.data);
      })
      .catch((error)=> console.log(error));
    },[]
  )


  return (
    <>
      <p>return back</p>
      <div className='home-details-container'>
      <div className="home-details-left-column">
        <img src={homeData.images[0]}/>
      </div>
      <div className="home-details-right-column">
      </div>
    </div>
    </>
  )
}

export default HomeDetailPage
