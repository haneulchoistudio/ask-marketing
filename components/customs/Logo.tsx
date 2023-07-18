import { NextJS } from 'types';
import { Route } from '../templates';

interface LogoProps {
    href?: string;
}

const Logo: NextJS.Components.Created<LogoProps> = ({ href = '/' }) => {
    return (
        <h1 className="font-bold text-xl lg:text-2xl">
            <Route
                href={href}
                className="lg:hover:text-slate-300 font-light tracking-widest"
            >
                ASK.MK
            </Route>
        </h1>
    );
};

export default Logo;
