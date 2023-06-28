/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        tertiary: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-bellefair)"],
        serif: ["var(--font-barlow-condensed)"],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
