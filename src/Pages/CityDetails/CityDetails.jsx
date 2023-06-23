import {useEffect, useState} from 'react'
import "./CityDetails.css"
import Slider from '../../Components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
            {/* {
              singleCity.map((city)=>{
                return <option>{city?.bedroom_count}</option>
              })
            } */}
          </select>
          <select name="" id="">
            <option value="">Any bathroom</option>
            {/* <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option> */}
          </select>
          <select name="" id="">
            <option value="">Any price</option>
            {/* <option value="">1000</option>
            <option value="">1500</option>
            <option value="">2000</option>
            <option value="">2500</option>
            <option value="">3000</option> */}
          </select>
          <select name="" id="">
            <option value="">Home Type</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default CityDetails
