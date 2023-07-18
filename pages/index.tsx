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
import { BsArrowLeft } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';

import DigitalMarketing from 'public/digital_marketing.png';
import SocialMedia from 'public/social_media.png';
import WebDesign from 'public/web_design.png';
import Ecommerce from 'public/ecommerce.png';
import Footer from '@/next-js/components/Footer';
import ServiceCard from '@/next-js/components/ServiceCard';
import StylishRoute from '@/next-js/components/StylishRoute';

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
                                                    ? 'bg-gray-50 text-neutral-900'
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
                <article className="relative z-20 w-full p-10 bg-neutral-950/90 backdrop-blur-lg flex flex-col items-center">
                    <h3 className="mb-4 text-sm lg:text-base xl:text-lg font-light font-lato tracking-[0.25rem] lg:tracking-[0.2rem] text-center">
                        ASK MARKETING
                    </h3>
                    <h4 className="mb-6 max-w-4xl mx-auto text-center font-bold font-lato text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.35] md:leading-[1.35] lg:leading-[1.35] xl:leading-[1.35]">
                        Shaping the Digital Presence of Your Business.
                    </h4>
                    <StylishRoute href="/about" name="OUR MISSIONS" />
                </article>
            </div>
            <div className="w-full h-auto bg-neutral-800">
                <section className="px-8 py-20 lg:py-28 max-w-cutoff mx-auto">
                    <article className="mb-20 lg:mb-28">
                        <h3 className="mb-4 text-sm lg:text-base xl:text-lg font-light font-lato tracking-[0.25rem] lg:tracking-[0.2rem] text-center">
                            ASK MARKETING
                        </h3>
                        <h4 className="font-bold font-lato text-3xl md:text-4xl lg:text-5xl text-center tracking-[0.25rem]">
                            Services & Works
                        </h4>
                        <div className="w-[50%] max-w-[100px] mx-auto block h-[2.5px] bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 mt-12 rounded" />
                    </article>
                    <List className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <ServiceCard
                            name="digital marketing"
                            slug="digitalmarketing"
                            image={DigitalMarketing}
                            description="Attract more customers on the internet."
                        />
                        <div className="lg:col-span-2 pl-6 border-l-2 lg:pl-0 lg:border-l-0 flex flex-col gap-y-8 border-t-2 lg:border-t-0 pt-6 lg:pt-0 ">
                            <div>
                                <h3 className="font-bold text-2xl md:text-4xl lg:text-6xl lg:text-right mb-6 lg:mb-8 leading-[1.4] lg:leading-[1.2]">
                                    <span className="inline-block">
                                        ATTRACTING CUSTOMERS
                                    </span>
                                    <span className="inline-block">
                                        ON INTERNET
                                    </span>
                                </h3>
                                <p className="font-lato font-light text-left lg:text-right leading-[1.67] lg:leading-[1.67] 2xl:leading-[1.67] text-base lg:text-lg 2xl:text-xl pr-16 lg:pr-0 lg:pl-16 2xl:pl-32">
                                    <strong>ASK MAREKTING</strong> provides
                                    various services from digital marketing to
                                    ecommerce platform development. We use
                                    modern strategies and best practices to
                                    attract customers on internet to your
                                    business.
                                </p>
                            </div>
                            <div className="flex flex-col items-start lg:items-end">
                                <StylishRoute
                                    href="/about"
                                    name="GO TO CONTACT"
                                />
                            </div>
                        </div>
                        <ServiceCard
                            name="web design"
                            slug="webdesign"
                            image={WebDesign}
                            description="Show your business to the world."
                        />
                        <ServiceCard
                            name="social media"
                            slug="socialmedia"
                            image={SocialMedia}
                            description="Expose your business to appropriate users on media."
                        />
                        <ServiceCard
                            name="ecommerce"
                            slug="ecommerce"
                            image={Ecommerce}
                            description="Make and own an e-commerce platform to sell your products."
                        />
                    </List>
                </section>
            </div>
            <Footer />
        </>
    );
};

Homepage.getLayout = (page) => {
    return <PageLayout>{page}</PageLayout>;
};

export default Homepage;
