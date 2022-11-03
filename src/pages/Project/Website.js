import React, { useId, useState } from 'react'
import AvatarMan from '../../assets/img/black-man.png'
import AvatarWoman from '../../assets/img/woman-avatar.png'
import AvatarOther from '../../assets/img/rainbow-cloth.png'
import '../../styles/Project/website.css'
import { Stepper, Button, Group, Input, MantineProvider } from '@mantine/core'


const Website = () => {

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const colorStep = '#ffa31c'
  const [isActive, setIsActive] = useState();

  const genderType = [
    {
      id: 1,
      type: 'un homme',
      img: AvatarMan
    },
    {
      id: 2,
      type: 'une femme',
      img: AvatarWoman
    },
    {
      id: 3,
      type: 'autre',
      img: AvatarOther
    }
  ]

  const onClick = id => {
    setIsActive(id);
    console.log(id)
  };

  const id = useId()

  return (<>
    <div className='w-full h-full bg-blue-800 flex flex-col'>
      <div className='w-[75%]  border-2 border-[#001760b0] shadow-2xl p-16 my-10 rounded-md mx-auto flex flex-col text-white bg-[#152d7d]'>
        <Stepper color='orange' active={active} iconSize={32} className='my-[0.25rem] mx-[5%] font-mabryRegular' onStepClick={setActive} breakpoint="lg" radius='sm'>
          <Stepper.Step className='text-white' label="First step" description="votre identité">
            <span className='text-center text-white font-mabryRegular my-9 capitalize text-3xl'>informations personnelles:</span>
          </Stepper.Step>
          <Stepper.Step className='text-white' label="Second step" description="identité du site web">
            <span className='text-center text-white font-mabryRegular my-9 capitalize text-3xl'>informations du projet:</span>
          </Stepper.Step>
          <Stepper.Completed>
            Parfait ! Votre devis est en route !
          </Stepper.Completed>
        </Stepper>
        <form className='flex items-start flex-col justify-around w-full mt-[5%] ml-[5%]'>
          <div className='flex my-8 flex-col w-full'>
            <span className='text-xl mb-2'>Vous êtes :</span>
            <div className='flex justify-between content-start w-[89%] items-center'>
              {genderType.map((val, index) => {
                return (
                  <>
                    <div key={index} onClick={e => onClick(val.id)} className={`w-32 h-32 border-2 border-[#001760b0] items-center flex flex-col justify-end  boxGender ${val.id === isActive ? 'boxActive' : ''} `} >
                      <img src={val.img} alt="" className='' />
                      <span className='text-lg capitalize'>{val.type}</span>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className='flex w-full mb-10'>
            <div className='w-full flex flex-col'>
              <label htmlFor="lastName" className='text-xl mb-2'>Nom :</label>
              <input placeholder='Exemple: (Doe)' className='w-[78%]  border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="firstName" className='text-xl mb-2'>Prénom :</label>
              <input placeholder='Exemple: (John)' className='w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
          </div>
          <div className='flex w-full mb-10'>
            <div className='w-full flex flex-col'>
              <label htmlFor="email" className='text-xl mb-2'>E-mail :</label>
              <input placeholder='Exemple: (johndoe@email.com)' className='w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="tel" className='text-xl mb-2'>Téléphone :</label>
              <input className='w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
          </div>
          <div className='flex w-full mb-10'>
            <div className='w-full flex flex-col'>
              <label htmlFor="adress" className='text-xl mb-2'>Adresse :</label>
              <input placeholder='Exemple: (12 rue de la liberté)' className='w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="tel" className='text-xl mb-2'>Ville :</label>
              <input placeholder='Exemple: (Paris)' className='w-[78%] border-[#001760b0] border-2 mr-10 inputForm bg-transparent p-2 outline-none' type="text" />
            </div>
          </div>
        </form>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </div>
    </div>
  </>
  )
}

export default Website