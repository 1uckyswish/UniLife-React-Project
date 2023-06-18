import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AllCitiesFetch = createContext();

export default function AllCitiesFetchProvider(props) {
  const citiesApiUrl1 = 'https://unilife-server.herokuapp.com/cities?limit=20';
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(citiesApiUrl1)
      .then((result) => {
        setCities(result?.data?.response);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array
  
  return (
    <AllCitiesFetch.Provider value={{ cities }}>
      {props.children}
    </AllCitiesFetch.Provider>
  );
}
