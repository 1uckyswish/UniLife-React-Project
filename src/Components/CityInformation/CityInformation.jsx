import {useEffect, useState} from 'react'
import "./CityInformation.css"
import axios from 'axios';
import StudentsImage from "/src/assets/grouped-students.png"

function CityInformation({homeid}) {
    const [propertyInfo, setPropertyInfo] = useState([]);

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/cities/${homeid}`)
            .then((result)=>{
                // console.log(result.data.data[0]);
                setPropertyInfo(result.data.data[0])
            })
            .catch((error)=> console.log(error));
        },[]
    )

  return (
    <div className='city-banner'>
        <div className="city-banner-info">
            <h2>Being a Student in <span>{propertyInfo?.name}</span></h2>
            <p>{propertyInfo?.student_life}</p>
            <p>{propertyInfo?.universities}</p>
        </div>
        <div className="city-banner-img">
            <img src={StudentsImage} />
        </div>
    </div>
  )
}

export default CityInformation