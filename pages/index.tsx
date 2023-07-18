import type { NextJS } from 'types';
import {
    List,
    MetaLayout,
    Modal,
    PageLayout,
    Route,
} from '@/next-js/template-components';
import Nav from '@/next-js/components/Nav';
import Logo from '@/next-js/components/Logo';
import Contact from '@/next-js/components/Contact';
import MobileNav from '@/next-js/components/MobileNav';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';

const Homepage: NextJS.Pages.Page = () => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const router = useRouter();
    const routes: NextJS.Components.WithHref[] = [
        { href: '/', name: 'Home' },
        { href: '/about', name: 'About Us' },
        { href: '/services', name: 'Our Services' },
        { href: '/works', name: 'Our Works' },
        { href: '/contact', name: 'Contact' },
    ];

    return (
        <>
            <MetaLayout title="Ask Marketing | Digitally Brining Your Business' Success" />
            <Nav>
                <Logo />
                <List className="flex items-center gap-x-4 lg:gap-x-6">
                    <Contact email="info@askm.com" phone="+1 714 616 7205">
                        <Route
                            href="/contact"
                            className="text-sm font-bold px-5 py-2 border uppercase tracking-wider lg:hover:bg-slate-50 lg:hover:text-neutral-900"
                        >
                            Let&apos;s Do It
                        </Route>
                    </Contact>
                    <MobileNav onClick={() => setShowMobileNav(true)}>
                        <Modal
                            name="This is mobile navigation modal."
                            isInView={showMobileNav}
                            onHide={() => setShowMobileNav(false)}
                            backgroundElement={
                                <article className="flex flex-col gap-y-6 lg:gap-y-8">
                                    {routes.map((route, idx) => (
                                        <Route
                                            key={idx}
                                            href={route.href}
                                            className={twMerge(
                                                'font-semibold text-4xl flex items-center gap-x-4 w-max lg:hover:opacity-60 cursor-pointer',
                                                router.pathname === route.href
                                                    ? 'bg-slate-50 text-neutral-900'
                                                    : 'text-slate-300'
                                            )}
                                        >
                                            <span>{route.name}</span>
                                            {router.pathname === route.href && (
                                                <BsArrowLeft size={36} />
                                            )}
                                        </Route>
                                    ))}
                                </article>
                            }
                            backgroundClassName="w-full"
                            buttonClassName="z-10 group block w-[17.5px] h-[17.5px]"
                            buttonElement={<AiOutlineClose size={26} />}
                        />
                    </MobileNav>
                </List>
            </Nav>
            <div className="h-screen flex flex-col justify-center items-center p-8 mx-auto relative">
                <article className="absolute max-w-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 w-max flex items-center gap-x-4 md:gap-x-8 lg:gap-x-12 2xl:gap-x-24">
                    <span className="rounded-md animate-spin block w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-gradient-to-br from-indigo-400 via-blue-400 to-teal-400" />
                    <span className="rounded-md animate-ping block w-[25px] lg:w-[55px] h-[25px] lg:h-[55px] bg-gradient-to-br from-indigo-400 via-blue-400 to-teal-400" />
                    <span className="rounded-md animate-bounce block w-[60px] lg:w-[110px] h-[60px] lg:h-[110px] bg-gradient-to-br from-indigo-400 via-blue-400 to-teal-400" />
                </article>
                <article className="relative z-20 w-full p-10 bg-neutral-900/90 backdrop-blur-lg">
                    <h3 className="mb-4 text-sm lg:text-base xl:text-lg font-light font-lato tracking-[0.25rem] lg:tracking-[0.2rem] text-center">
                        ASK MARKETING
                    </h3>
                    <h4 className="mb-6 max-w-4xl mx-auto text-center font-bold font-lato text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.35] md:leading-[1.35] lg:leading-[1.35] xl:leading-[1.35]">
                        Shaping the Digital Presence of Your Business.
                    </h4>
                    <Route
                        href="/about"
                        className="group font-light text-xl lg:text-2xl flex items-center gap-x-4 justify-center py-3 lg:hover:px-8 lg:hover:bg-neutral-800/90 border border-transparent w-max mx-auto lg:hover:border-neutral-400/25 tracking-wide lg:hover:tracking-[0.05rem] shadow-2xl shadow-transparent lg:hover:shadow-black/50"
                    >
                        <span>Our Missions</span>
                        <BsArrowRight
                            size={26}
                            className="transition-all duration-[0.275s] ease-in-out lg:group-hover:rotate-180 "
                        />
                    </Route>
                </article>
            </div>
        </>
    );
};

Homepage.getLayout = (page) => {
    return <PageLayout>{page}</PageLayout>;
};

export default Homepage;
