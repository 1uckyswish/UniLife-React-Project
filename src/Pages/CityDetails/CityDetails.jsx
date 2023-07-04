import React, { useEffect, useState } from 'react';
import './CityDetails.css';
import Slider from '../../Components/Slider/Slider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import CityInformation from '../../Components/CityInformation/CityInformation';
import { useLocation } from 'react-router-dom';

function CityDetails({ data }) {
  const { homeid } = useParams();
  const [singleCity, setSingleData] = useState([]);
  const [cityPrices, setCityPrices] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [bedroomFilter, setBedroomFilter] = useState('');
  const [bathroomFilter, setBathroomFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const numArray = [1, 2, 3, 4, 5, 6];
  const homes = ["Apartment", "Detached", "Semi-Detached"];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/city/${homeid}`)
      .then((result) => {
        console.log("test for prop", result.data.response);
        setSingleData(result.data.response);
        setCityPrices(result.data.response.map((city) => city.rent));
      })
      .catch((error) => console.log(error));

       axios.get(`https://unilife-server.herokuapp.com/cities/${homeid}`)
            .then((res)=>{
                setCityName(res?.data?.data[0]?.name)
            })
            .catch((error)=> console.log(error));
  }, []);

  const filterProperties = () => {
    const query = {
      city_id: homeid,
      bedroom_count: bedroomFilter,
      bathroom_count: bathroomFilter,
      rent: priceFilter,
      property_type: typeFilter,
    };

    axios
      .post("https://unilife-server.herokuapp.com/properties/filter", { query })
      .then((res) => {
        setSingleData(res.data.response);
        console.log("single", singleCity);
      })
      .catch((err) => console.log(err));
  };

  const handleBedroomChange = (e) => {
    const value = e.target.value;
    setBedroomFilter(value === "" ? "" : parseInt(value));
  };

  const handleBathroomChange = (e) => {
    const value = e.target.value;
    setBathroomFilter(value === "" ? "" : parseInt(value));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceFilter(value === "" ? "" : parseInt(value));
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  useEffect(() => {
    filterProperties();
  }, [bedroomFilter, bathroomFilter, priceFilter, typeFilter]);

  return (
    <>
      <Slider data={data} />
      <div className="city-details-container">
        <div className="filter-form-container">
          <div className="filter-form-titles" key={data?.city_id}>
            <p>Min Bedroom</p>
            <p>Min Bathroom</p>
            <p>Max Price</p>
            <p>Home Type</p>
          </div>
          <div className="filter-form-inputs">
            <select name="" id="" onChange={handleBedroomChange}>
              <option value="">Any Bedroom</option>
              {numArray.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <select name="" id="" onChange={handleBathroomChange}>
              <option value="">Any Bathroom</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select name="" id="" onChange={handlePriceChange}>
              <option value="">Any Price</option>
              {cityPrices
                .sort((a, b) => b - a)
                .map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <select name="" id="" onChange={handleTypeChange}>
              <option value="">Any Type</option>
              {homes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="property-card-container">
          <div className="property-card-container-title">
            <h5>
              {singleCity.length} Homes in <span>{cityName}</span>
            </h5>
          </div>
          <div className="property-card-grid">
            {singleCity.map((card) => (
              <PropertyCard card={card} homeid={homeid} />
            ))}
          </div>
        </div>
        <CityInformation homeid={homeid} />
      </div>
    </>
  );
}

export default CityDetails;
