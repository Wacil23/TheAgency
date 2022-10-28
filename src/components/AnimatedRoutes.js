import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Mission from '../pages/Mission'
import { AnimatePresence } from 'framer-motion'
import WebsiteRegistor from '../pages/WebsiteRegistor'

const AnimatedRoutes = (props) => {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/mon-projet'){
            props.func(false)
        }else {
            props.func(true)
        }
    }, [location.pathname, props])

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/mon-projet' element={<WebsiteRegistor />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes