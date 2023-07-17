/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            maxWidth: { cutoff: '1440px' },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in-out cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
