import {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities';
import Data from "./utils/data.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RiseLoader from 'react-spinners/RiseLoader';

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
    <Header />
    <Routes>
      <Route path='/' element={<Homepage data={data1}/>} />
      <Route path='/SeeAllCities' element={<SeeAllCities data={data2}/>} />
    </Routes>
    <Footer />
 </BrowserRouter>
  }
 </>
  );
}

export default App;
