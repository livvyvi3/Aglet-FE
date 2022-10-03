import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Slider/>
    </div></BrowserRouter>
  );
}

export default App;
