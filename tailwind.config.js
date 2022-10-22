/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        gazpacho: ["Gazpacho", "sans-serif"],
        gazpachoLight: ["gazpachoLight", "sans-serif"],
        gingerRegular: ['gingerRegular'],
        gingerThin: ['gingerThin'],
        gingerBold: ['gingerBold']
        
      },
    },
  },
  plugins: [],
}
