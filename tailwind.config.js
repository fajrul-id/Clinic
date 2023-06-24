/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D282E",
        secondary: "#666666",
        background: "#EAEEEF",
        blue: "#3393F0",
        cream: "#F6E8DA",
        orange: "#E98167",
        green: "#BFDB38"
      },
    },
  },
  plugins: [],
};
