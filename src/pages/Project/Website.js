import React, { useState } from 'react'
import AvatarMan from '../../assets/img/black-man.png'
import AvatarWoman from '../../assets/img/woman-avatar.png'
import AvatarOther from '../../assets/img/rainbow-cloth.png'
import '../../styles/Project/website.css'

const Website = () => {

  const [active, setactive] = useState();

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
    setactive(id);
    console.log(id)
  };


  return (<>
    <div className='w-full h-full bg-blue-800 flex flex-col'>
      <span className='text-center text-white font-gazpacho my-16 uppercase text-5xl'>entrez vos informations :</span>
      <div className='w-[60%] h-[100vh] border-2 border-[#001760b0] shadow-2xl p-16 rounded-md mx-auto flex flex-col text-white bg-[#152d7d]'>
        <form className='flex items-start flex-col justify-around'>
          <div className='flex items-center my-8 '>
            <span className='text-2xl'>Vous êtes :</span>
            {genderType.map((val, index) => {
              return (
                <>
                  <div key={index} onClick={e => onClick(val.id)} className={`w-32 h-32 border-2 border-[#001760b0] items-center justify-end flex flex-col boxGender ${val.id === active ? 'boxActive' : ''} `} >
                    <img src={val.img} alt="" className='' />
                    <span className='text-xl'>{val.type}</span>
                  </div>
                </>
              )
            })}
          </div>
          <div className='flex my-8 items-center w-full '>
            <label htmlFor="firstName" className='text-xl'>Nom :
              <input type="text" />
            </label>
            <label htmlFor="firstName" className='text-xl'>Prénom :
              <input type="text" />
            </label>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Website