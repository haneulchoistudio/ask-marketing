/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import type { NextJS } from 'types';

const ThemeContext =
    createContext<NextJS.Components.Contexts.ThemeContextProps>({
        theme: 'light',
        onChangeTheme: null,
    });

const ThemeContextProvider: NextJS.Components.Contexts.ThemeContextProvider = ({
    children,
    as = 'light',
    storageName = 'theme',
}) => {
    const [theme, setTheme] = useState<typeof as>(as);

    function onChangeTheme(_theme?: typeof as) {
        localStorage.setItem(storageName, _theme);
        setTheme(_theme);
    }

    function loadTheme() {
        if (!localStorage.getItem(storageName)) {
            localStorage.setItem(storageName, 'light');
            setTheme('light');
        } else {
            setTheme(localStorage.getItem(storageName) as typeof as);
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, onChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
