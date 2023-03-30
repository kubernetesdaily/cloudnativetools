/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#dadadb",
        grayFill: "#9b9c9d",
      },
      backgroundColor: {
        bgPrimary: "#1d1e20",
        bgGray: "#2e2e33",
      },
    },
  },
  plugins: [],
};
