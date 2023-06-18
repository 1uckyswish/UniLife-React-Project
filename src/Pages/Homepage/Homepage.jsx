import {useContext} from 'react';
import './Homepage.css';
import TopCities from '../../Components/TopCities/TopCities';
import SearchAndCompare from '../../Components/SearchAndCompare/SearchAndCompare';
import FavoriteAndSelection from '../../Components/FavoriteAndSelection/FavoriteAndSelection';
import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import { AllCitiesFetch } from "/src/Contexts/AllCitiesFetch"

function Homepage({data}) {
  const { cities } = useContext(AllCitiesFetch);

  return (
    <>
      <Slider data={data}/>
       <div className='homepage-container'>
    <div className='form-container'>
      <select name="Search by city" id="cities">
        <option value="Search by city">Search by city</option>
        {
          cities.map((item) => (
            <option key={item?.id} value={item?.name}>
              {item?.name}
            </option>
          ))
        }
      </select>
      <button type="submit" form="cities">Find Homes</button>
    </div>
    <div className='top-cities-container'>
      <h1>Student Accommodations In our Top Cities</h1>
      <TopCities />
      <Link to="/SeeAllCities"><button id='all-cities-button'>See All Cities</button></Link>
    </div>
      <div className='details-container'>
        <SearchAndCompare />
      </div>
      <div className='favorite-container'>
         <FavoriteAndSelection />
      </div>
    </div>
    </>
  );
}

export default Homepage;
