/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    portfolio_gray: 'rgb(85,85,85)'
  },
  plugins: [
    require('daisyui'),
  ],
}