import { Analytics } from "@vercel/analytics/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/utils/bgparedemarrom.jpg')"
      }

    },
  },
  plugins: [],
}


