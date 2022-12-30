import React from 'react'
import '../../styles/Main/OurProposition.css'
const OurPropositions = () => {
    return (
        <div className='w-full h-[70vh] bg-[#743ad8] flex flex-col relative'>

            <span className='text-center text-[#ffca2b] uppercase text-2xl mb-24 mt-10 font-bold'>ce que nous proposons</span>
            <div className='flex justify-around mx-24'>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Marketing</span>
                    <ul className='mt-6'>
                        <li>Audio</li>
                        <li>Influenceurs</li>
                        <li>Mailing</li>
                        <li>Résaux Sociaux</li>
                        <li>Vidéos</li>
                    </ul>
                </div>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Design</span>
                    <ul className='mt-6'>
                        <li>Logo</li>
                        <li>Maquette Web</li>
                        <li>Produits</li>
                        <li>UI/UX</li>
                    </ul>
                </div>
                <div>
                    <span className='text-[19px] text-white font-mabryBold capitalize'>Développement</span>
                    <ul className='mt-6'>
                        <li>Base De Données</li>
                        <li>Framework</li>
                        <li>Shopify</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurPropositions