import { useForm } from "@mantine/form";
import { configureStore, createSlice } from "@reduxjs/toolkit";




const stepperActive = createSlice({
    name: 'stepper',
    initialState: 0,
    reducers: {
        nextStep: (state, action) => {
            return state < 2 ? state + 1 : state
        },
        prevStep: (state, action) => {
            return state > 0 ? state - 1 : state
        },
    }
})

const checkChoicesSlice = createSlice({
    name: 'checkChoice',
    initialState: [
        { responseRadio1: '' },
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
            }
            state[1] = newResp2
        },
        handleClickLogo: (state, action) => {
            const newRespLogo = {
                responseRadioLogo: action.payload
            }
            state[2] = newRespLogo
        }
    }
})


export const store = configureStore({
    reducer: {
        stepper: stepperActive.reducer,
        checkChoice: checkChoicesSlice.reducer

    }
})