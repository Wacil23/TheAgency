import React from 'react'
import pc from '../../../assets/website/pc.png'
import website from '../../../assets/website/website.png'
import wordpress from '../../../assets/website/wordpress-1.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import domain from '../../../assets/website/website-domain.png'

const Website = () => {
    return (
        <div className="h-screen w-full">
            <div className='diagonal2 w-full h-screen bg-[#2e1756] relative' >
                <div className='flex flex-col relative w-full h-full justify-around flex-wrap'>
                    <span className=' marketing absolute w-fit top-[25%] uppercase -translate-y-[50%] text-7xl leading-[9rem] right-[18%] font-gazpacho'>site web</span>
                    <span className='w-[95%] text-center pl-[56%] pt-[5%] description text-2xl text-white '>Vous avez toujours rêvé d'un site web pour votre commerce, vendre vos produits ou partager votre quotidien sur votre blog, tout ça personolasier selon vos choix ? <br /> Cette solution est faite pour vous n'attendez plus !</span>
                    <button className='decouvrir -mt-96 font-gingerBold text-[#2e1756] hover:text-white w-fit  p-4 rounded-2xl bg-[#ffca2b] transition-all flex items-center ml-[70%]'>Découvrir <BsArrowRightCircleFill className='ml-4' /></button>
                    <img className='absolute bottom-[45%] translate-y-[65%] w-[20%] left-[17%] social' alt='s' data-depth='0.1' src={pc} />
                    <img className='absolute bottom-[75%] translate-y-[65%] w-[5%] left-[15%] facebook' alt='s' data-depth='0.1' src={domain} />
                    <img className='absolute bottom-[68%] translate-y-[65%] w-[6%] left-[40%] snapchat' alt='s' data-depth='0.1' src={wordpress} />
                    <img className='absolute bottom-[40%] translate-y-[65%] w-[8%] left-[5%] google' alt='s' src={website} />
                </div>
            </div>
        </div>
    )
}

export default Website