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

import { AnimatePresence } from 'framer-motion';

export default function App(props: NextJS.Pages.PageProps) {
    const { Component, pageProps } = props;

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <ThemeContextProvider storageName="theme">
            <LanguageContextProvider storageName="language">
                {getLayout(
                    <AnimatePresence
                        mode="wait"
                        initial={false}
                        onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <Component {...pageProps} />
                    </AnimatePresence>
                )}
            </LanguageContextProvider>
        </ThemeContextProvider>
    );
}
