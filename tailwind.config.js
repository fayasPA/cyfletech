/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#32de84", 
        selRed: "#9C2327",
        selBlack: "#101010",
        borderColor: "#ffffff59",
        borderColor2: "#ffffffce",
        zinc: "#232222",
        gray: "#555555",
        lineGray: "#656565",
        selWhite: "#F2F1EF",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

