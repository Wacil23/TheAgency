import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

const App = () => {

  const [showNav, setShowNav] = useState(true)


  const location = (data) => {
    if (data.includes('/mon-projet')){
      setShowNav(false)
    }if (data.includes('/contact')){
      setShowNav(false)
    }
    else {
      setShowNav(true)
    }
  }

  

  return (
    <>
      <BrowserRouter>
        {showNav ? <Navbar /> : <></>}
        <AnimatedRoutes func={location} />
      </BrowserRouter>
    </>
  );
}

export default App;
