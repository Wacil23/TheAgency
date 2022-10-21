import './App.css';
import JumpBoy from './assets/img/with shadow/Digital/he_in_jump.png'
import JumpGirl from './assets/img/with shadow/Digital/she_in_jump.png'
import Navbar from './components/Navbar';
import Parallax from 'parallax-js'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const parallaxRef = useRef(null)
  const h1Ref = useRef(null)
  useEffect(() => {
    const parallax = parallaxRef.current
    const h1 = h1Ref.current

    gsap.to(h1, {
      scrollTrigger: {
        trigger: parallax,
        markers: false,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'restart pause reverse none'
      },
      opacity: '0',
      scale: 0
    })
  })

  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current)
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, [])

  return (
    <>
      <div className='bg-[#8a47ff]' ref={parallaxRef}>
        <Navbar />
        <div className="content flex justify-center content-center items-center">
          <div className="flex justify-center items-center content-center w-full h-[90vh]">
            <h1 className={`text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase`} data-depth='0.05'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase' data-depth='0.05'>the agency.</h1>
            <div ref={sceneEl} className='fixed'>
              <img className='w-[50%]  boy' data-depth='0.05' src={JumpBoy} alt="" ref={h1Ref}/>
              <img className='w-[50%] absolute girl' data-depth='0.07' src={JumpGirl} alt="" ref={h1Ref}/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#8a47ff] absolute w-screen h-screen"></div>
    </>
  );
}

export default App;
