import React from 'react'
import '../../styles/Project/website.css'
import FormProject from './Form/FormProject';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import Step from '../../components/Stepper';


const Website = () => {


  return (<Provider store={store}>
    <div className='w-full h-full bg-blue-800 flex flex-col'>
      <div className='w-[75%] border-2 border-[#001760b0] shadow-2xl p-16 my-10 rounded-md mx-auto flex flex-col text-white bg-[#152d7d]'>
        <Step />
        <FormProject/>
        
      </div>
    </div>
  </Provider>
  )
}

export default Website