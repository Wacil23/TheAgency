import { configureStore, createSlice } from "@reduxjs/toolkit";
import emailjs from '@emailjs/browser';




const stepperActive = createSlice({
    name: 'stepper',
    initialState: 0,
    reducers: {
        nextStep: (state, action) => {
            return state < 2 ? state + 1 : state
        }
    }
})

const checkChoicesSlice = createSlice({
    name: 'checkChoice',
    initialState: [
        { responseRadio1: 'Non' },
        { responseRadio2: '' },
        { responseRadioLogo: '' },
    ],
    reducers: {
        handleClickRadio1: (state, action) => {
            const newResp1 = {
                responseRadio1: action.payload
            }
            state[0] = newResp1

        },
        handleClickRadio2: (state, action) => {
            const newResp2 = {
                responseRadio2: action.payload
            };
            state[1] = newResp2;
        },
        handleClickLogo: (state, action) => {
            const newRespLogo = {
                responseRadioLogo: action.payload
            }
            state[2] = newRespLogo
        }
    }
})

const formInfoSlice = createSlice({
    name: 'formInfo',
    initialState: {
        value: []
    },
    reducers: {
        setFormInfo: (state, action) => {
            state.value.push(action.payload)
        },
        sendFormInfo: (state, action) => {
            //First Step : 
            let firstStepValue = state.value[0]
            //Secon Step :
            let secondStepValue = state.value[1]
            //Merged objects from Array in values
            let values = Object.assign(firstStepValue, secondStepValue)

            emailjs.send('service_ke9qykx', 'template_ht6b8t5', values, 'qioJ1SRDXS3sbViPK')
                .then(response => {
                    console.log('success', response)
                })
        }
    }
})


export const store = configureStore({
    reducer: {
        stepper: stepperActive.reducer,
        checkChoice: checkChoicesSlice.reducer,
        formInfo: formInfoSlice.reducer
    }
})