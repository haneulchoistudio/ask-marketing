import { twMerge } from 'tailwind-merge';
import type { NextJS } from 'types';

interface FormProps {
    onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
    name: string;
}

const __Form__: NextJS.Components.Default<
    NextJS.Components.WithChildren<'must'> &
        NextJS.Components.WithClassName &
        FormProps
> = ({ name, children, onSubmit, className = '' }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={twMerge(className)}
            data-form-name={name}
        >
            {children}
        </form>
    );
};

export default __Form__;
