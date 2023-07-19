import dynamic from 'next/dynamic';
import { twMerge } from 'tailwind-merge';
import type { NextJS } from 'types';

const Form = dynamic(() => import('../templates').then((_) => _.Form));

const ContactForm: NextJS.Components.Created<
    NextJS.Components.WithChildren<'must'> & NextJS.Components.WithClassName
> = ({ children, className = '' }) => {
    return (
        <Form
            name="contact form"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            onSubmit={(e) => {
                console.log(e);
            }}
        >
            <article className="lg:col-span-4">
                <h4 className="font-medium text-2xl md:text-3xl lg:text-4xl">
                    Let&apos;s Get in Touch
                </h4>
                <article className="w-[120px] block h-[2.5px] bg-blue-500 rounded my-8" />
                <p className="flex flex-col gap-y-4 lg:text-lg lg:leading-relaxed">
                    <span>
                        It only takes one droplet to break the tension of still
                        water and ripple across the whole surface.
                    </span>

                    <span>Let us be that droplet for you.</span>
                </p>

                <a
                    href="mailto:haneulchoi.business@gmail.com"
                    className="mt-4 lg:mt-6 block text-slate-400 border-slate-400 tracking-[0.25rem] text-xs lg:text-sm pb-1 border-b w-max transition-all duration-[0.325s] ease-in-out lg:hover:text-blue-500 lg:hover:border-blue-500"
                >
                    ASK.MK@ASKMARKETING.COM
                </a>
            </article>
            <article className={twMerge('lg:col-span-8', className)}>
                {children}
            </article>
        </Form>
    );
};

export default ContactForm;
