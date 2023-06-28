import { useState, useEffect } from 'react';
import './TopCities.css';
import axios from 'axios';
import TopCityCard from '../TopCityCard/TopCityCard';
import "./TopCities.css"

function TopCities() {
  const topCitiesApiUrl = `https://unilife-server.herokuapp.com/cities`;
  const [topNineCities, setTopNineCities] = useState([]);

  useEffect(() => {
    axios
      .get(topCitiesApiUrl)
      .then((result) => {
        console.log("test ets", result?.data?.response);
        setTopNineCities(result?.data?.response.slice(0, 9)); // Remove the last item
      })
      .catch((error) => console.log(error));
  }, [topCitiesApiUrl]);

  return (
    <div className='grid-photo-container'>
    {topNineCities.map((city) => (
      <TopCityCard key={city?._id} topCity={city} />
    ))}
  </div>
  );
}

export default TopCities;
