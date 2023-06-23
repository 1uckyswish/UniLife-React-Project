import {useEffect, useState} from 'react'
import "./CityDetails.css"
import Slider from '../../Components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../Components/PropertyCard/PropertyCard';

function CityDetails({data}) {
  const { homeid } = useParams();
  const [singleCity, setSingleData] = useState([]);

  useEffect(
    ()=>{
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${homeid}`)
      .then((result)=>{
        console.log(result.data.response);
        setSingleData(result.data.response);
      })
      .catch((error)=> console.log(error))
    },[])

  return (
   <>
    <Slider data={data}/>
    <div className="city-details-container">
      <div className='filter-form-container'>
        <div className="filter-form-titles">
          <p>Min Bedroom</p>
          <p>Min Bathroom</p>
          <p>Max Price</p>
          <p>Home Type</p>
        </div>
        <div className="filter-form-inputs">
          <select name="" id="">
            <option value="">Any Bedroom</option>
            {
              singleCity.map((city)=>{
                return <option>{city?.bedroom_count}</option>
              })
            }
          </select>
          <select name="" id="">
            <option value="">Any bathroom</option>
             {
              singleCity.map((city)=>{
                return <option>{city?.bathroom_count}</option>
              })
            }
          </select>
          <select name="" id="">
            <option value="">Any price</option>
               {
              singleCity.map((city)=>{
                return <option>{city?.rent}</option>
              })
            }
          </select>
          <select name="" id="">
            <option value="">Any price</option>
               {
              singleCity.map((city)=>{
                return <option>{city?.property_type}</option>
              })
            }
          </select>
        </div>
      </div>
      <div className="property-card-container">
        <div className="property-card-container-title">
            <p>{singleCity.length} Homes in <span>{singleCity[0]?.address?.city}</span></p>
        </div>
        <div className="property-card-grid">
            {
              singleCity.map((card)=>{
                return <PropertyCard card={card}/>
              })
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default CityDetails
