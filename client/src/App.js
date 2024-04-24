import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/home';
import AboutMe from './Components/AboutMe/aboutMe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;