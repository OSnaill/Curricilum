/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#1A1B1B',
        'dark' : '#324749',
        'mint' : '#77FFA0',
        'white' : '#ffffff'
      }
    },
  },
  plugins: [],
}

