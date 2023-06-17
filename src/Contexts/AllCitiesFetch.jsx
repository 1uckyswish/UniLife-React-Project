import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AllCitiesFetch = createContext();

export default function AllCitiesFetchProvider(props) {
  const citiesApiUrl1 = 'https://unilife-server.herokuapp.com/cities?page=1';
  const citiesApiUrl2 = 'https://unilife-server.herokuapp.com/cities?page=2';
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(citiesApiUrl1)
      .then((result) => {
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array

  useEffect(() => {
    axios.get(citiesApiUrl2)
      .then((result) => {
        setCities((prevCities) => [...prevCities, ...result.data.response]);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array

  return (
    <AllCitiesFetch.Provider value={{ cities }}>
      {props.children}
    </AllCitiesFetch.Provider>
  );
}
