/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Anton']
      },
      colors: {
        'bottle-green': {
          '50': '#f1fcfa',
          '100': '#cef9ee',
          '200': '#9ef1de',
          '300': '#65e3ca',
          '400': '#36cbb3',
          '500': '#1cb099',
          '600': '#148d7d',
          '700': '#147166',
          '800': '#155a53',
          '900': '#164b45',
          '950': '#052422',
      },
      'PersonalGray':{
        '50': '#272829',
        '100': '#61677A'
      },
      'ColorLetter': '#FFF6E0'   
      }
    },
  },
  plugins: [],
}

