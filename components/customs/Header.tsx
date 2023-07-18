import type { NextJS } from 'types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import dynamic from 'next/dynamic';

const List = dynamic(() => import('../templates').then((_) => _.List));
const Route = dynamic(() => import('../templates').then((_) => _.Route));
const Modal = dynamic(() => import('../templates').then((_) => _.Modal));
const Logo = dynamic(() => import('./Logo'));
const MobileNav = dynamic(() => import('./MobileNav'));
const Nav = dynamic(() => import('./Nav'));
const Contact = dynamic(() => import('./Contact'));

const Header = () => {
    const router = useRouter();
    const routes: NextJS.Components.WithHref[] = [
        { href: '/', name: 'Home' },
        { href: '/about', name: 'About Us' },
        { href: '/services', name: 'Our Services' },
        { href: '/works', name: 'Our Works' },
        { href: '/contact', name: 'Contact' },
    ];
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    return (
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
    );
};

export default Header;
