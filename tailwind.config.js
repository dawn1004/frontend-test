/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A2161',
        secondary: '#A274A8',
        cusGray: '#CECECE'
      },
    },
  },
  plugins: [],
}

