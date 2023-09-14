/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors:{
          'ciokolate-blanco': '#F1F1FB',
          'ciokolate-negro': '#12070A',
          'ciokolate-crema': '#F2E4DF',
          'ciokolate-rosa': '#F2527D',
          'ciokolate-marron': '#40181F',
        }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

