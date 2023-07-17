import type { NextJS } from 'types';
import Head from 'next/head';

export const __MetaLayout__: NextJS.Components.Default<
    NextJS.Pages.DefaultMetadata
> = ({ title = '', description = '', image = '/', keywords = [] }) => {
    return (
        <Head>
            {/* <-- keywords --> */}
            <meta name="keywords" property={keywords.join(', ')} />
            {/* <-- image --> */}
            <meta name="og:image" property={image} />
            {/* <-- description --> */}
            <meta name="og:description" property={description} />
            <meta name="description" property={description} />
            {/* <-- title --> */}
            <meta name="og:title" property={title} />
            <title>{title}</title>
        </Head>
    );
};

import Style from './layout.module.css';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const __PageLayout__: NextJS.Components.Default<
    NextJS.Components.WithChildren<'must'>
> = ({ children }) => {
    const router = useRouter();

    const [animate, setAnimate] = useState<'' | 'fadein' | 'fadeout'>('fadein');

    useEffect(() => {
        setAnimate('fadeout');
        const timer = setTimeout(() => {
            setAnimate('fadein');
        }, 750);

        return () => clearInterval(timer);
    }, [router]);

    useEffect(() => {
        if (animate === 'fadein') {
            const timer = setTimeout(() => {
                setAnimate('');
            }, 750);

            return () => clearInterval(timer);
        }
    }, [animate]);

    return (
        <div
            className={twMerge(
                Style.main,
                animate === 'fadein' ? 'in' : animate === 'fadeout' ? 'out' : ''
            )}
        >
            {children}
        </div>
    );
};
