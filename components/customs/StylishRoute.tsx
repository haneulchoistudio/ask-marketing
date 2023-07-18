import type { NextJS } from 'types';
import { Route } from '../templates';
import { BsArrowRight } from 'react-icons/bs';

const StylishRoute: NextJS.Components.Created<NextJS.Components.WithHref> = ({
    href,
    name,
}) => {
    return (
        <Route
            href={href}
            className="group font-light text-xl lg:text-2xl flex items-center gap-x-4 justify-center py-4 lg:hover:px-8 lg:hover:bg-neutral-800/90 border border-transparent w-max lg:hover:border-neutral-400/25 tracking-wide lg:hover:tracking-[0.05rem] shadow-2xl shadow-transparent lg:hover:shadow-black/50"
        >
            <span>{name}</span>
            <BsArrowRight
                size={26}
                className="transition-all duration-[0.275s] ease-in-out lg:group-hover:rotate-180 "
            />
        </Route>
    );
};

export default StylishRoute;
