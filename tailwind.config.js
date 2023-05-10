/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
                secondary: {
                    100: "#fadcd4",
                    200: "#f5b9a9",
                    300: "#ef967d",
                    400: "#ea7352",
                    500: "#e55027",
                    600: "#b7401f",
                    700: "#893017",
                    800: "#5c2010",
                    900: "#2e1008",
                },
                lightBlue: {
                    100: "#ecfcfc",
                    200: "#d9f9f9",
                    300: "#c6f5f5",
                    400: "#b3f2f2",
                    500: "#a0efef",
                    600: "#80bfbf",
                    700: "#608f8f",
                    800: "#406060",
                    900: "#203030",
                },
            },
            animation: {
                "show-on-scroll-up": "show-on-scroll-up 1s ease-out forwards",
                "show-on-scroll-left":
                    "show-on-scroll-left 1s ease-out forwards",
                "show-on-scroll-right":
                    "show-on-scroll-right 1s ease-out forwards",
            },
            keyframes: {
                "show-on-scroll-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
                "show-on-scroll-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(20px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)",
                    },
                },
                "show-on-scroll-right": {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-20px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)",
                    },
                },
            },
        },
        fontFamily: {
            body: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
            sans: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
    },
    plugins: [require("flowbite/plugin")],
};
