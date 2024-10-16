/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #00161D 0%, rgba(0, 22, 28, 0.2) 100%)',
      },
      colors: {
        lightblue: '#CDFCFF',
        'cyan-1270': 'var(--color-cyan-1270, #0C2B2FB2)',
        home: '#092327',
        container: '#08252A',
        insidecolor: '#7EBABF',
        insidecontainer: '#00161D',
        insidecolor1: '#08252A',
        textcolor1: '#637479',
      },
    },
  },
  plugins: [],
}

