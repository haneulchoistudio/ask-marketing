import { twMerge } from 'tailwind-merge';
import { NextJS } from 'types';

const Nav: NextJS.Components.Created<
    NextJS.Components.WithChildren<'must'> & NextJS.Components.WithClassName
> = ({ children, className = '' }) => {
    return (
        <nav
            className={twMerge(
                'w-full flex justify-between items-center px-6 py-4 bg-neutral-900/90 backdrop-bur-md fixed top-0',
                className
            )}
        >
            {children}
        </nav>
    );
};

export default Nav;
