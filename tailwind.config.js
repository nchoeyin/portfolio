/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite reverse',
      },
    },

  },
  colors: {
    portfolio_gray: 'rgb(85,85,85)'
  },
  plugins: [
    require('daisyui'),
  ],
}
