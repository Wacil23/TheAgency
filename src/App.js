import './App.css';
import JumpBoy from './assets/img/with shadow/Digital/he_in_jump.png'
import JumpGirl from './assets/img/with shadow/Digital/she_in_jump.png'
import Navbar from './components/Navbar';
import Parallax from 'parallax-js'
import { useEffect, useRef } from 'react';

const App = () => {

  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current)

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <>
      <div className='bg-[#8a47ff]' >
        <Navbar />
        <div className="content flex justify-center content-center items-center">
          <div className="flex justify-center items-center content-center w-full h-[90vh]">
            <h1 className={`text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase`}>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center absolute text-[#ffca2b] uppercase'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center   absolute text-[#ffca2b] uppercase'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase'>the agency.</h1>
            <h1 className='text-9xl font-gazpacho text-center  absolute text-[#ffca2b] uppercase'>the agency.</h1>
            <div ref={sceneEl} >
              <img className='w-[50%] absolute boy' data-depth='0.2' src={JumpBoy} alt="" style={{position: 'sticky'}}/>
              <img className='w-[50%] absolute girl' data-depth='0.2' src={JumpGirl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
