import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
