import type { NextJS } from 'types';
import {
    List,
    MetaLayout,
    PageLayout,
    Route,
} from '@/next-js/template-components';
import Nav from '@/next-js/components/Nav';
import Logo from '@/next-js/components/Logo';
import ContactText from '@/next-js/components/ContactText';

const Homepage: NextJS.Pages.Page = () => {
    return (
        <>
            <MetaLayout title="Ask Marketing | Digitally Brining Your Business' Success" />
            <Nav>
                <Logo />

                <List className="flex items-center gap-x-4">
                    <ContactText email="info@askm.com" phone="+1 714 616 7205">
                        <Route
                            href="/contact"
                            className="text-sm font-bold px-5 py-2.5 border uppercase tracking-wider lg:hover:bg-slate-50 lg:hover:text-neutral-900"
                        >
                            Let&apos;s Do It
                        </Route>
                    </ContactText>
                </List>
            </Nav>
            <div className="h-screen flex flex-col justify-center items-center p-8 mx-auto">
                <article className="w-full">
                    <h3 className="mb-4 text-sm lg:text-base xl:text-lg font-bold font-lato tracking-[0.25rem] lg:tracking-[0.2rem] text-center">
                        Ask Marketing
                    </h3>
                    <h4 className="mb-6 text-center font-bold font-lato text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.35] md:leading-[1.35] lg:leading-[1.35] xl:leading-[1.35]">
                        Shaping the Digital Presence of Your Business.
                    </h4>
                    <Route
                        href="/about"
                        className="px-8 py-3.5 border-2 bg-transparent text-white w-full flex justify-center font-lato font-medium max-w-[325px] mx-auto text-lg lg:text-xl lg:hover:bg-slate-50 lg:hover:text-neutral-900"
                    >
                        About Our Mission
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
