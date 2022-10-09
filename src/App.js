import Slider from './Components/Slider';
import Contact from './Components/Contact';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Slider/>}/>
        <Route exact path={"Contact"} element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
