import type { NextJS } from 'types';
import { MetaLayout, PageLayout, Route } from '@/next-js/template-components';

const Homepage: NextJS.Pages.Page = () => {
    return (
        <>
            <MetaLayout />
            <div className="h-screen flex flex-col justify-center items-center p-8 max-w-[500px] mx-auto">
                <article>
                    <h3 className="mb-8 font-semibold text-3xl">Home Page</h3>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit deserunt deleniti itaque fugit quisquam,
                        aspernatur sequi repellendus voluptatum asperiores animi
                        voluptatibus cupiditate omnis at quis fuga non
                        consectetur est saepe.
                    </p>
                    <Route
                        href="/about"
                        className="underline text-blue-500 font-medium"
                    >
                        Go to about
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
