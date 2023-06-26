import {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities';
import CityDetails from "./Pages/CityDetails/CityDetails"
import Data from "./utils/data.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RiseLoader from 'react-spinners/RiseLoader';
import AllCitiesFetchProvider from "/src/Contexts/AllCitiesFetch"
import HomeDetailPage from "/src/Pages/HomeDetailPage/HomeDetailPage"
import ShortListProvider from './Contexts/ShortList';
import ShortListPage from './Pages/ShortListPage/ShortListPage';

function App() {
  const [data1, data2, data3] = Data;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);


  return (
 <>
  {
    loading? (
      <div className='app-container'>
        <div className="loader-container">
          <RiseLoader size={50} color={'#d6368e'} loading={loading} />
        </div>
        </div>
    )
    :
      <BrowserRouter>
        <AllCitiesFetchProvider>
      <ShortListProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage data={data1}/>} />
      <Route path='/SeeAllCities' element={<SeeAllCities data={data2}/>} />
      <Route path='/ShortList' element={<ShortListPage />} />
      <Route path='/CityDetails/:homeid' element={<CityDetails data={data3} />} />
      <Route path='/HomeDetailPage/:propertyid/' element={<HomeDetailPage />} />
    </Routes>
    <Footer />
      </ShortListProvider>
    </AllCitiesFetchProvider>
 </BrowserRouter>
  }
 </>
  );
}

export default App;
