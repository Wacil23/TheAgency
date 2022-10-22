import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Mission from "./pages/Mission";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
