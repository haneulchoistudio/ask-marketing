import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { StaticImageData } from 'next/image';

declare namespace NextJS {
    declare namespace Pages {
        export type Page<P = unknown, IP = P> = NextPage<P, IP> & {
            layout?: React.ComponentType;
            getLayout?: (_page: React.ReactElement) => React.ReactNode;
        };
        export type PageProps<P = Record<string, unknown>> = {
            Component: Page;
        } & AppProps<P>;

        type DefaultMetadata = {
            title?: string;
            description?: string;
            keywords?: string[];
            image?: string;
        };

        export type Metadata<Expansion extends DefaultMetadata = null> =
            Expansion extends DefaultMetadata ? Expansion : DefaultMetadata;

        type PageNotFoundStatusCode = 404;
        type PageServerErrorStatusCode = 500;
        export type PageRequestResponseCode = [
            PageNotFoundStatusCode,
            PageServerErrorStatusCode
        ][number];

        type ErrorPageProps = {
            code: PageRequestResponseCode;
            message: string;
        };
    }

    declare namespace Components {
        export type Default<Props extends object = unknown> = React.FC<Props>;
        export type Created<Props extends object = unknown> = React.FC<Props>;

        interface ChildrenProps {
            children: React.ReactNode;
        }
        interface OptionalChildrenProps {
            children?: React.ReactNode;
        }

        export type WithChildren<T extends string = 'optional'> =
            T extends 'optional' ? OptionalChildrenProps : ChildrenProps;

        interface ClassNameProps {
            className: string;
        }

        interface OptionalClassNameProps {
            className?: string;
        }

        export type WithClassName<T extends string = 'optional'> =
            T extends 'optional' ? OptionalClassNameProps : ClassNameProps;

        interface OnClickProps {
            onClick: () => void;
        }

        interface OptionalOnClickProps {
            onClick?: () => void;
        }

        export type WithOnClick<T extends string = 'optional'> =
            T extends 'optional' ? OptionalOnClickProps : OnClickProps;

        interface BaseHrefProps<T extends object = unknown> extends T {
            href?: string;
            name?: string;
        }

        export type WithHref<T extends object = unknown> = BaseHrefProps<T>;
        declare namespace Contexts {
            type ThemeDark = 'dark';
            type ThemeLight = 'light';
            export type ThemeType = [ThemeDark, ThemeLight][number];
            export interface ThemeContextProps {
                theme: ThemeType;
                onChangeTheme: (theme?: ThemeType) => void;
            }

            export type ThemeContextProvider = NextJS.Components.Default<
                NextJS.Components.WithChildren<'must'> & {
                    as?: NextJS.Components.Contexts.ThemeType;
                    storageName?: string;
                }
            >;

            type LanguageKorean = 'ko';
            type LanguageEnglish = 'en';

            export type LanguageType = [
                LanguageKorean,
                LanguageEnglish
            ][number];

            export interface LanguageContextProps {
                language: NextJS.Components.Contexts.LanguageType;
                onChangeLanguage: (language: LanguageType) => void;
            }

            export type LanguageContextProvider = NextJS.Components.Default<
                NextJS.Components.WithChildren<'must'> & {
                    as?: LanguageType;
                    storageName: string;
                }
            >;
        }
    }

    declare namespace Data {
        export interface ServiceProps {
            name?: string;
            description?: string;
            slug?: string;
            image?: StaticImageData;
        }
    }
}
