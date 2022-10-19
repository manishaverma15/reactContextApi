import React, { useContext } from 'react';
import { ButtonThemeContext, ButtonThemeContextInterface } from '../../Contexts/ButtonTheme';

export function ContextDemoFC() {
    const themeContext: ButtonThemeContextInterface = useContext(ButtonThemeContext);

    return(
        <>
            <button onClick={themeContext.toggleTheme}>test {themeContext.theme.color}</button>
        </>
    )
}