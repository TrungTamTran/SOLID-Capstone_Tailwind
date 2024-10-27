/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        gray1: '#757693',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}