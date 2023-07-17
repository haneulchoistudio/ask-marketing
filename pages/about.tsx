import { MetaLayout, PageLayout, Route } from '@/next-js/template-components';
import type { NextJS } from 'types';

const Aboutpage: NextJS.Pages.Page = () => {
    return (
        <>
            <MetaLayout />
            <div className="h-screen flex flex-col justify-center items-center p-8 max-w-[500px] mx-auto">
                <article>
                    <h3 className="mb-8 font-semibold text-3xl">About Page</h3>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit deserunt deleniti itaque fugit quisquam,
                        aspernatur sequi repellendus voluptatum asperiores animi
                        voluptatibus cupiditate omnis at quis fuga non
                        consectetur est saepe.
                    </p>
                    <Route
                        href="/"
                        className="underline text-blue-500 font-medium"
                    >
                        Go home
                    </Route>
                </article>
            </div>
        </>
    );
};

Aboutpage.getLayout = (page) => {
    return <PageLayout>{page}</PageLayout>;
};

export default Aboutpage;
