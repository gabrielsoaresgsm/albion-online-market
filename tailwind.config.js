import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#191a1e', 
        primary: '#059669',
      },
      opacity: {
        '12': '0.12',
      },
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
}

/*

       primary: {
          100: '#E6F6FF',
          200: '#B3E3FF',
          300: '#80D0FF',
          400: '#4DBDFF',
          500: '#1AACFF',
          600: '#0089CC',
          700: '#006699',
          800: '#004466',
          900: '#002233',
        },
*/