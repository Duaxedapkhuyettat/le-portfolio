/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        light: '#fef4e4',
        default: '#ffefd5',
        dark: '#fee5bc',
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

