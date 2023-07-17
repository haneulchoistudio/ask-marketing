import { MetaLayout, Route } from '@/next-js/template-components';
import type { NextJS } from 'types';

const ErrorPage: NextJS.Pages.Page<NextJS.Pages.ErrorPageProps> = ({
    code,
    message,
}) => {
    return (
        <>
            <MetaLayout title={`Ask Marketing - Page Error | ${code}`} />
            <div className="h-screen flex flex-col justify-center items-center max-w-[500px] mx-auto">
                <article className="w-full px-8">
                    <h3 className="mb-6 font-semibold text-3xl lg:text-5xl text-pink-500 underline">
                        {code}
                    </h3>
                    <p className="mb-3 lg:text-lg leading-relaxed lg:leading-relaxed text-neutral-800 font-medium">
                        {message}
                    </p>
                    <Route
                        href="/"
                        className="underline text-blue-500 font-medium lg:hover:opacity-60"
                    >
                        Go Home
                    </Route>
                </article>
            </div>
        </>
    );
};
ErrorPage.getInitialProps = ({ res, err }) => {
    const code = res ? res.statusCode : err ? err.statusCode : 404;

    const messages: Record<NextJS.Pages.PageRequestResponseCode, string> = {
        '404': 'The page you requested is not found.',
        '500': 'There was an error from the server.',
    } as const;

    return {
        code,
        message: messages[code],
    } as NextJS.Pages.ErrorPageProps;
};

export default ErrorPage;
