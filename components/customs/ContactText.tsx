import { NextJS } from 'types';

interface ContactTextProps {
    email?: string;
    phone?: string;
}

const ContactText: NextJS.Components.Created<
    NextJS.Components.WithChildren & ContactTextProps
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

export default ContactText;
