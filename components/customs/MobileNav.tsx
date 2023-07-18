import { NextJS } from 'types';
import { Button } from '../templates';

const MobileNav: NextJS.Components.Created<
    NextJS.Components.WithChildren<'must'> &
        NextJS.Components.WithOnClick<'must'>
> = ({ children, onClick }) => {
    return (
        <>
            <Button
                onClick={onClick}
                className="flex flex-col justify-center items-center w-[32.5px] h-auto gap-y-1.5 group cursor-pointer"
            >
                <span className="w-full block h-[1.5px] bg-slate-50 rounded transition-all ease-in-out duration-[0.325s] lg:group-hover:rotate-[180deg]" />
                <span className="w-full block h-[1.5px] bg-slate-50 rounded transition-all ease-in-out duration-[0.325s] lg:group-hover:-rotate-[180deg]" />
            </Button>
            {children}
        </>
    );
};

export default MobileNav;
