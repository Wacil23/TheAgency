import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Mission from '../pages/Mission'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/mission' element={<Mission />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes