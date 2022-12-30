import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Mission from '../pages/Mission'
import WebsiteRegistor from '../pages/WebsiteRegistor'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Website from '../pages/Project/Website'
import DigitalMarketing from '../pages/DigitalMarketing'
import SiteWeb from '../pages/SiteWeb'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import { gsap, Power4 } from 'gsap'
import { Canvas } from '@react-three/fiber'

const AnimatedRoutes = (props) => {
  const location = useLocation();
  gsap.registerPlugin(ScrollTrigger);

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    props.func(location.pathname)

  }, [location.pathname, location.key, props])


  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/site-web' element={<SiteWeb />} />
        <Route path='/marketing-digital' element={<DigitalMarketing />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Canvas style={{position: 'absolute'}} shadows flat linear camera={{fov: 45,near: 0.1,far: 200,position: [0, 0, 9]}}> <Contact /> </Canvas>} />
        <Route path='/mon-projet' element={<WebsiteRegistor />} />
        <Route path='/mon-projet/siteweb' element={<Website />} />
      </Routes>

    </>
  )
}

export default AnimatedRoutes