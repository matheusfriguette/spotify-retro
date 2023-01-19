const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-spotify)', ...fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'yellow': '#F1FF48',
      'orange': '#FF8A22',
      'green': '#12D861',
      'purple': '#6D1DBA',
      'pink': '#F56EBD',
    },
  },
  plugins: [],
};
