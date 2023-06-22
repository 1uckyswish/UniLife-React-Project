import {useContext} from 'react'
import "./SeeAllCities.css"
import Slider from '../../Components/Slider/Slider'
import { AllCitiesFetch } from '../../Contexts/AllCitiesFetch'
import { Link } from 'react-router-dom'
function SeeAllCities({ data }) {

const { cities } = useContext(AllCitiesFetch)


  return (
    <>
    <Slider data={data}/>
    <div className='all-cities-container'>
      <h2>Search by City</h2>
      <div className='all-city-buttons' key={cities?.id}>
       {
        cities.slice(0,24).map((city) => <Link to={`/HomeDetailPage?id=${city?._id}`} key={city?.id}><button>{city?.name}</button></Link>)
       }
      </div>
    </div>
    </>
  )
}

export default SeeAllCities
