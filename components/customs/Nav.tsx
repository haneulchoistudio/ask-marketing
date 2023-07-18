import { twMerge } from 'tailwind-merge';
import { NextJS } from 'types';

const Nav: NextJS.Components.Created<
    NextJS.Components.WithChildren<'must'> & NextJS.Components.WithClassName
> = ({ children, className = '' }) => {
    return (
        <nav
            className={twMerge(
                'w-full flex justify-between items-center py-5 px-6 lg:p-6 xl:p-8 2xl:px-10 bg-neutral-950/90 backdrop-bur-md fixed top-0 z-40',
                className
            )}
        >
            {children}
        </nav>
    );
};

export default Nav;
