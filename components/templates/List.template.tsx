import { twMerge } from 'tailwind-merge';
import type { NextJS } from 'types';

const __List__: NextJS.Components.Default<
    NextJS.Components.WithClassName & NextJS.Components.WithChildren<'must'>
> = ({ className = '', children }) => {
    return <ul className={twMerge('', className)}>{children}</ul>;
};

export default __List__;
