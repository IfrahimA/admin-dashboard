/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows:
      {
        'layout-1': 'grid-template-rows: 1fr 3fr'
      }
    },  
  },
  plugins: [],
}

