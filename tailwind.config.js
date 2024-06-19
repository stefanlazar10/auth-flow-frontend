/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1800px" },
      xl: { max: "1279px" },
      lg: { min: "1023px" },
      md: {min: "767px" },
      sm: { max: "639px" },
      smm:{max:"380px"},
    },
    extend: {
      colors: {
        "regal-green": "#22577A",
        grey: { 100: "#B2B2B225", 200: "#D9D9d9", 300: "#5F5F5F" },
      },
    },
    plugins: [],
  },
};
