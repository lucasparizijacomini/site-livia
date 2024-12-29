/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        icones: ["Icones"],
      },
      colors: {
        primary: "#DCAA4C",
      },
    },
  },
  plugins: [],
};
