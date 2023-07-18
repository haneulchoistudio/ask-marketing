import type { NextJS } from 'types';
import { twMerge } from 'tailwind-merge';
import Button from './Button.template';

const ModalCloseButton: NextJS.Components.Default<
    NextJS.Components.WithChildren<'must'> &
        NextJS.Components.WithClassName &
        NextJS.Components.WithOnClick<'must'>
> = ({ onClick, children, className = '' }) => {
    return (
        <Button
            onClick={onClick}
            className={twMerge(
                'fixed top-5 right-6 lg:top-6 xl:right-8 xl:top-8 2xl:right-10 cursor-pointer',
                className
            )}
        >
            {children}
        </Button>
    );
};

const ModalBackground: NextJS.Components.Default<
    NextJS.Components.WithChildren<'must'> & NextJS.Components.WithClassName
> = ({ children, className = '' }) => {
    return (
        <div
            className={twMerge(
                'w-full max-w-cutoff mx-auto px-5 py-6',
                className
            )}
        >
            {children}
        </div>
    );
};

interface ModalProps {
    name: string;
    isInView: boolean;
    onHide: () => void;

    buttonElement?: React.ReactNode;
    buttonClassName?: string;

    backgroundElement?: React.ReactNode;
    backgroundClassName?: string;
}
export const __Modal__: NextJS.Components.Default<
    NextJS.Components.WithClassName & ModalProps
> = ({
    onHide,
    isInView,
    name,
    className = '',
    buttonClassName = '',
    buttonElement = null,
    backgroundElement = null,
    backgroundClassName = '',
}) => {
    return (
        isInView && (
            <aside
                data-modal-name={name}
                className={twMerge(
                    'fixed top-0 left-0 z-50 w-full h-screen bg-neutral-900/75 backdrop-blur-md flex flex-col justify-center items-center',
                    className
                )}
            >
                {buttonElement && (
                    <ModalCloseButton
                        onClick={onHide}
                        className={buttonClassName}
                    >
                        {buttonElement}
                    </ModalCloseButton>
                )}
                <ModalBackground className={backgroundClassName}>
                    {backgroundElement}
                </ModalBackground>
            </aside>
        )
    );
};
