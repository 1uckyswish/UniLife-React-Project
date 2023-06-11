import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Slider from './Components/Slider/Slider';
import Data from "./utils/data.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [data1, data2, data3] = Data;

  return (
 <BrowserRouter>
    <Header />
    <Slider data={data1} />
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
    <Footer />
 </BrowserRouter>
  );
}

export default App;
