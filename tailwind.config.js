const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        fontFamily: {
            primary: "Playfair Display",
            body: "work Sans",
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem",
            },
        },
        extend: {
            colors: {
                "light-primary": "#9BE8D8",
                "light-secondary": "#176B87",
                "light-tail-100": "#64CCC5",
                "light-tail-500": "#AEC3AE",
                "dark-primary": "#050402",
                "dark-secondary": "#1C1D24",
                "dark-navy-100": "#07567D",
                "dark-navy-500": "#292D42",
                accent: {
                    DEFAULT: "#5C8374",
                    hover: "#07567D",
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red,
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};