import type { NextJS } from 'types';
import { twMerge } from 'tailwind-merge';

const __Button__: NextJS.Components.Default<
    NextJS.Components.WithOnClick<'must'> &
        NextJS.Components.WithChildren<'must'> &
        NextJS.Components.WithClassName
> = ({ onClick, children, className = '' }) => {
    return (
        <button
            type="button"
            className={twMerge(
                'transition-all duration-[0.275s] ease-in-out',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default __Button__;
