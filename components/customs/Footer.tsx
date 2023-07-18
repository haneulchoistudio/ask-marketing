import type { NextJS } from 'types';

const Footer: NextJS.Components.Created = () => {
    return (
        <footer className="w-full bg-neutral-800 border-t border-slate-400/10">
            <section className="px-8 py-16 max-w-cutoff mx-auto">
                <article className="flex flex-col items-center gap-y-2">
                    <h5 className="font-lato text-base lg:text-lg font-light tracking-[0.25rem]">
                        ASK MARKETING
                    </h5>
                    <p className="text-sm font-lato">
                        Copyright &copy; 2023. All Rights Reserved.
                    </p>
                </article>
            </section>
        </footer>
    );
};

export default Footer;
