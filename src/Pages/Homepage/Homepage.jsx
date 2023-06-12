import { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';

function Homepage() {
  const citiesApiUrl1 = 'https://unilife-server.herokuapp.com/cities?page=1';
  const citiesApiUrl2 = 'https://unilife-server.herokuapp.com/cities?page=2';
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(citiesApiUrl1)
      .then((result) => {
        console.log(result);
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.get(citiesApiUrl2)
      .then((result) => {
        console.log(result);
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='homepage-container'>
    <div className='form-container'>
      <select name="Search by city" id="cities">
        <option value="Search by city">Search by city</option>
        {
          cities.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))
        }
      </select>
      <button type="submit" form="cities">Find Homes</button>
    </div>
    <div className='top-cities-container'>
      <h1>Student Accommodations In our Top Cities</h1>



    </div>
    </div>
  );
}

export default Homepage;
