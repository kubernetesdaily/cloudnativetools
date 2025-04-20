/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f8f8f2',
        bgGray : '#282a36',
        bgPrimary : '#191a21',
        grayFill : '#6b6f8c',
      }
    },
  },
  plugins: [],
}
