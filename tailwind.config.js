const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Fraunces'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("kutty"),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'        },
      })
    })
  ]
}
