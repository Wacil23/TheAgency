import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
