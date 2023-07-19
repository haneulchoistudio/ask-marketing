import type { StaticImageData } from 'next/image';
import type { NextJS } from 'types';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Route = dynamic(() => import('../templates').then((_) => _.Route));
interface FloatBoxProps {
    description: string;
    slug: string;
}

const FloatBox: NextJS.Components.Created<FloatBoxProps> = ({
    description,
    slug,
}) => {
    return (
        <article className="absolute bottom-0 lg:-top-full z-10 lg:-translate-y-full w-full h-max lg:h-full bg-neutral-800 lg:bg-neutral    -900/95 lg:backdrop-blur-sm transform transition-all duration-[0.45s] ease-in-out lg:group-hover:-top-0 lg:group-hover:-translate-y-0 flex flex-col justify-between lg:justify-center p-6 lg:p-8">
            <p className="font-light text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:leading-[1.4] leading-[1.67] lg:leading-[1.67] mb-4 lg:mb-6">
                {description}
            </p>
            <Route
                href={`/services/${slug}`}
                className="py-3 px-8 border text-sm lg:text-base 2xl:text-lg border-slate-400/25 bg-neutral-800/5 backdrop-blur-sm text-white w-max shadow-xl shadow-transparent lg:hover:shadow-neutral-900/50 lg:hover:border-slate-200 cursor-pointer"
            >
                View Details
            </Route>
        </article>
    );
};

const ImageWrap: NextJS.Components.Created<
    NextJS.Components.WithChildren<'must'>
> = ({ children }) => {
    return (
        <div className="overflow-hidden mb-6 transition-all duration-[0.35s] ease-in-out relative lg:border lg:border-transparent lg:group-hover:border-neutral-50/50">
            {children}
        </div>
    );
};

interface ServiceImageProps {
    image: StaticImageData;
    alt?: string;
}

const ServiceImage: NextJS.Components.Created<ServiceImageProps> = ({
    image,
    alt,
}) => {
    return (
        <picture className="block overflow-hidden trasnform lg:group-hover:scale-125 rotate-45 transition-all duration-[0.35s] ease-in-out lg:group-hover:rotate-0">
            <Image src={image} alt={alt} />
        </picture>
    );
};

interface ServiceNameTagProps {
    name: string;
}

const ServiceNameTag: NextJS.Components.Created<ServiceNameTagProps> = ({
    name,
}) => {
    return (
        <div className="relative">
            <h5 className="font-light text-2xl lg:text-3xl text-center tracking-[0.25rem] transition-all duration-[0.35s] ease-in-out lg:group-hover:tracking-[0.15rem] uppercase lg:group-hover:scale-[115%] lg:group-hover:opacity-100 lg:opacity-75">
                {name}
            </h5>
        </div>
    );
};

const ServiceCard: NextJS.Components.Created<NextJS.Data.ServiceProps> = ({
    description,
    image,
    name,
    slug,
}) => {
    return (
        <div className="group transition-all duration-[0.35s] ease-in-out cursor-pointer">
            <ImageWrap>
                <FloatBox description={description} slug={slug} />{' '}
                <ServiceImage image={image} alt={`${slug} Photo`} />
            </ImageWrap>
            <ServiceNameTag name={name} />
        </div>
    );
};

export default ServiceCard;
