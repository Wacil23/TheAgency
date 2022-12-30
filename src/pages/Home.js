import { motion } from 'framer-motion'
import '../App.css';
import Header from './Main/Header';
import Intro from './Main/Intro';
import OurPropositions from './Main/OurPropositions';
import DifferentSteps from './Main/DifferentSteps';
import Marketing from './Main/About/Marketing';
import Website from './Main/About/Website';
import { Canvas, useFrame } from '@react-three/fiber';
import BoxGeometry from '../Fiber/BoxGeometry';
import { Html } from '@react-three/drei';

const Home = () => {

  return (<>
    <Header />
    <Intro />
    <OurPropositions />

    <DifferentSteps />


    <Marketing />
    <Website />
  </>
  )
}

export default Home