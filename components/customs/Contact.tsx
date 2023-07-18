import type { NextJS } from 'types';

interface ContactProps {
    email?: string;
    phone?: string;
}

const Contact: NextJS.Components.Created<
    NextJS.Components.WithChildren & ContactProps
> = ({ phone, email, children }) => {
    return (
        <>
            <span className="hidden md:inline-flex flex-col items-center text-xs gap-y-0.5">
                <span className="font-medium">{email}</span>
                <span>{phone}</span>
            </span>
            {children && children}
        </>
    );
};

export default Contact;
