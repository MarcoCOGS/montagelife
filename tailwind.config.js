/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'OwnersNarrowBold': ['OwnersNarrowBold'],
        'ScandiaRegular': ['ScandiaRegular'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
      'xl2': '1350px',
      '2xl': '1536px',
    }

  },

  plugins: [],
}