import type { NextJS } from 'types';
import dynamic from 'next/dynamic';

const Route = dynamic(() =>
    import('@/next-js/template-components').then((_) => _.Route)
);
const MetaLayout = dynamic(() =>
    import('@/next-js/template-components').then((_) => _.MetaLayout)
);
const PageLayout = dynamic(() =>
    import('@/next-js/template-components').then((_) => _.PageLayout)
);

const Aboutpage: NextJS.Pages.Page = () => {
    return (
        <>
            <MetaLayout />
            <PageLayout>
                <div className="h-screen flex flex-col justify-center items-center p-8 max-w-[500px] mx-auto">
                    <article>
                        <h3 className="mb-8 font-semibold text-3xl">
                            About Page
                        </h3>
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Suscipit deserunt deleniti itaque fugit
                            quisquam, aspernatur sequi repellendus voluptatum
                            asperiores animi voluptatibus cupiditate omnis at
                            quis fuga non consectetur est saepe.
                        </p>
                        <Route
                            href="/"
                            className="underline text-blue-500 font-medium"
                        >
                            Go home
                        </Route>
                    </article>
                </div>
            </PageLayout>
        </>
    );
};

Aboutpage.getLayout = (page) => {
    return page;
};

export default Aboutpage;
