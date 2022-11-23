import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Mission from '../pages/Mission'
import { AnimatePresence } from 'framer-motion'
import WebsiteRegistor from '../pages/WebsiteRegistor'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Website from '../pages/Project/Website'
import DigitalMarketing from '../pages/DigitalMarketing'
import SiteWeb from '../pages/SiteWeb'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'

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

    }, [location.pathname, props])


    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/site-web' element={<SiteWeb />} />
                <Route path='/marketing-digital' element={<DigitalMarketing />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/mon-projet' element={<WebsiteRegistor />} />
                <Route path='/mon-projet/siteweb' element={<Website />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes