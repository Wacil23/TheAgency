
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const LogoProvider = ({ children }) => {

    const [currentColor, setCurrentColor] = useState('#ffca2b');

    const setColor = (color) => {
        setCurrentColor(color);
    }


    return (
        <StateContext.Provider value={{ currentColor, setColor }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);