/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontWeight:{
        thin1: 400, // Thêm font-weight có tên thin1 với giá trị 400
      },
      colors:{
        gray1: "#757693", // Thêm màu tùy chỉnh có tên gray1
        btn: '#2c3149', // Thêm màu tùy chỉnh có tên blackho
      },
      maxWidth: {
        "c-1390": "1390px", // Thiết lập max-w-c-1390 là 1390px
      },
      padding: {
        '7.5': '1.875rem', // Tạo lớp px-7.5 với giá trị 1.875rem cho padding-left và padding-right
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
      inset: {
        '11.5': '2.875rem', // Tạo lớp left-11.5 với giá trị 2.875rem
      },
      zIndex: {
        '1': '1', // Tạo lớp z-1 với giá trị 1
      },
      spacing: {
        '6.5': '1.625rem', // Định nghĩa khoảng cách 6.5 là 1.625rem
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}