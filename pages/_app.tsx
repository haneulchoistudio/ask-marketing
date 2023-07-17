/**
 * Tailwind Stylesheet
 */
import '@/next-js/style';
/**
 * Theme (dark|light) & Language (ko|en)
 * Context Wrappers
 */
import { ThemeContextProvider } from '@/next-js/template-components';
import { LanguageContextProvider } from '@/next-js/template-components';

import type { NextJS } from 'types';

export default function App(props: NextJS.Pages.PageProps) {
    const { Component, pageProps } = props;

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <ThemeContextProvider storageName="theme">
            <LanguageContextProvider storageName="language">
                {getLayout(<Component {...pageProps} />)}
            </LanguageContextProvider>
        </ThemeContextProvider>
    );
}
