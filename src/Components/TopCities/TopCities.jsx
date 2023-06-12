import {useState, useEffect} from 'react';
import './TopCities.css';
import axios from 'axios';

function TopCities() {
    const topCitiesApiUrl = `https://unilife-server.herokuapp.com/cities`;
    const [topNineCities, setTopNineCities] = useState([]);

    useEffect(
        ()=>{
            axios.get(topCitiesApiUrl)
            .then((result)=>{
                console.log("test ets", result.data.response);
            })
            .catch((error)=> console.log(error));
        },[topCitiesApiUrl]
    );
  return (
    <div>
      <h1>Grid pic</h1>
    </div>
  )
}

export default TopCities
