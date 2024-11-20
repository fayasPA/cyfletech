/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selGray: {
          DEFAULT: "#525252",
          100: "#252525",
          200: "#141414",
          body: '#18392B',
          luxe: '#054e20',
        },
        green: "#32de84", 
        selRed: "#9C2327",
        selBlack: "#101010",
        oldBorderColor: "#ffffff59",
        borderColor: "#908f8f",
        
        borderColor2: "#ffffffce",
        zinc: "#232222",
        // gray: "#555555",
        lineGray: "#656565",
        selWhite: "#F2F1EF",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

