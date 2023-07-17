import type { NextJS } from 'types';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const __Route__: NextJS.Components.Default<
    NextJS.Components.WithChildren<'must'> &
        NextJS.Components.WithClassName &
        NextJS.Components.WithHref
> = ({ children, className = '', href, name }) => {
    return (
        <Link
            data-link-name={name}
            href={href}
            className={twMerge(
                'transition-all duration-[0.275s] ease-in-out',
                className
            )}
        >
            {children}
        </Link>
    );
};

export default __Route__;
