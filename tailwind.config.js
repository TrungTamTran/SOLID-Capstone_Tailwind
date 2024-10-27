/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontWeight:{
        thin1: 400,

      },
      colors:{
        gray1: "#757693"
      },
      maxWidth: {
        "c-1390": "1390px", // Thiết lập max-w-c-1390 là 1390px
      },
      padding: {
        "35": "8.75rem", // Thiết lập pt-35 là 8.75rem
        "25": "25px", // Thiết lập pb-25 là 25px
        "46": "11.5rem", // Thiết lập pt-46 là 11.5rem
      },
      gap: {
        "32.5": "8.125rem", // Thiết lập gap-32.5 là 8.125rem
      },
      margin: {
        "4.5": "1.125rem", // Thiết lập mb-4.5 là 1.125rem 
      },
      fontSize: {
        'hero': ['44px', { lineHeight: '58px' }],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}