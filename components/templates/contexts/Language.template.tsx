/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { NextJS } from 'types';

const LanguageContext =
    createContext<NextJS.Components.Contexts.LanguageContextProps>({
        language: 'en',
        onChangeLanguage: null,
    });

const LanguageContextProvider: NextJS.Components.Contexts.LanguageContextProvider =
    ({ as = 'en', children, storageName = 'language' }) => {
        const [language, setLanguage] = useState<typeof as>(as);

        function onChangeLanguage(_language: typeof as) {
            localStorage.setItem(storageName, _language);
            setLanguage(_language);
        }

        function loadLanguage() {
            if (!localStorage.getItem(storageName)) {
                localStorage.setItem(storageName, 'en');
                setLanguage('en');
            } else {
                setLanguage(localStorage.getItem(storageName) as typeof as);
            }
        }

        useEffect(() => {
            loadLanguage();
        }, []);

        return (
            <LanguageContext.Provider value={{ language, onChangeLanguage }}>
                {children}
            </LanguageContext.Provider>
        );
    };

export { LanguageContext, LanguageContextProvider };
