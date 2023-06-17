import {useEffect, useState} from 'react'
import "./SeeAllCities.css"
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
function SeeAllCities({data}) {
   const citiesApiUrl1 = 'https://unilife-server.herokuapp.com/cities?page=1';
  const citiesApiUrl2 = 'https://unilife-server.herokuapp.com/cities?page=2';
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(citiesApiUrl1)
      .then((result) => {
        // console.log(result);
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, [citiesApiUrl1]);

  useEffect(() => {
    axios.get(citiesApiUrl2)
      .then((result) => {
        // console.log(result);
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, [citiesApiUrl2]);



  return (
    <>
    <Slider data={data}/>
    <div className='all-cities-container'>
      <h2>Search by City</h2>
      <div className='all-city-buttons'>
       {
        cities.map((city) => <button>{city.name}</button>)
       }
      </div>
    </div>
    </>
  )
}

export default SeeAllCities
