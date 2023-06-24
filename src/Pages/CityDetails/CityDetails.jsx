import React, { useEffect, useState } from 'react';
import './CityDetails.css';
import Slider from '../../Components/Slider/Slider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import CityInformation from '../../Components/CityInformation/CityInformation';

function CityDetails({ data }) {
  const { homeid } = useParams();
  const [singleCity, setSingleData] = useState([]);

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${homeid}`)
      .then((result) => {
        console.log(result.data.response);
        setSingleData(result.data.response);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterProperties = (bedroom, bathroom, price) => {
    const query = {
      city_id: homeid,
      bedroom_count: bedroom,
      bathroom_count: bathroom,
      rent: price
    };

    axios.post('https://unilife-server.herokuapp.com/properties/filter',{ query })
      .then(res => {
        setSingleData(res.data.response);
        console.log("single", singleCity)
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Slider data={data} />
      <div className="city-details-container">
        <div className='filter-form-container'>
          <div className="filter-form-titles">
            <p>Min Bedroom</p>
            <p>Min Bathroom</p>
            <p>Max Price</p>
            <p>Home Type</p>
          </div>
          <div className="filter-form-inputs">
            <select name="" id="" onChange={(e) => filterProperties(e.target.value, '', '')}>
              <option value="">Any Bedroom</option>
              {
                singleCity.map((city) => (
                  <option value={city?.bedroom_count}>{city?.bedroom_count}</option>
                ))
              }
            </select>
            <select name="" id="" onChange={(e) => filterProperties('', e.target.value, '')}>
              <option value="">Any Bathroom</option>
              {
                singleCity.map((city) => (
                  <option value={city?.bathroom_count}>{city?.bathroom_count}</option>
                ))
              }
            </select>
            <select name="" id="" onChange={(e) => filterProperties('', '', e.target.value)}>
              <option value="">Any Price</option>
              {
                singleCity.map((city) => (
                  <option value={city?.rent}>{city?.rent}</option>
                ))
              }
            </select>
            <select name="" id="">
              <option value="">Any price</option>
              {
                singleCity.map((city) => (
                  <option>{city?.property_type}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="property-card-container">
          <div className="property-card-container-title">
            <h5>{singleCity.length} Homes in <span>{singleCity[0]?.address?.city}</span></h5>
          </div>
          <div className="property-card-grid">
            {
              singleCity.map((card) => (
                <PropertyCard card={card}/>
              ))
            }
          </div>
        </div>
        <CityInformation homeid={homeid} />
      </div>
    </>
  );
}

export default CityDetails;
