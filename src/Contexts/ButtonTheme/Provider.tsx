import React, { createContext, useState } from 'react';

export interface ThemeInterface {
    color: string;
    background: string;
}

export interface ButtonThemeContextInterface {
    theme: ThemeInterface;
    toggleTheme: () => void;
}

export interface ButtomThemeInterface {
    primary: ThemeInterface;
    secondary: ThemeInterface;
}

export const buttonThemes: ButtomThemeInterface = {
    primary: {
        color: "white",
        background: "#45c496"
    },

    secondary: {
        color: "pink",
        background: "#d91b42"
    },
}

const ButtonThemeContext = createContext<ButtonThemeContextInterface>({ theme: buttonThemes.primary, toggleTheme: () => { } });

const ButtonThemeContextProvider = (props: any) => {
    const [theme, setTheme] = useState(buttonThemes.primary);

    const toggleTheme = () => {
        if (theme.color === buttonThemes.primary.color) {
            setTheme(buttonThemes.secondary);
        } else {
            setTheme(buttonThemes.primary);
        }
    }

    return <ButtonThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ButtonThemeContext.Provider>
}

export { ButtonThemeContextProvider, ButtonThemeContext };
