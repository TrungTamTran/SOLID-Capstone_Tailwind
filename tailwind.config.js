/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontWeight:{
        thin1: 400, // Thêm font-weight có tên thin1 với giá trị 400
      },
      colors:{
        bodyBG: "#fcfcfc",
        gray1: "#757693", // Thêm màu tùy chỉnh có tên gray1
        btn: '#2c3149', // Thêm màu tùy chỉnh có tên btn
        zumthor: 'rgb(237, 245, 255)', // Định nghĩa màu zumthor với giá trị RGB
        primary: 'rgba(0, 107, 255, 1)', // Màu xanh với giá trị RGB được định nghĩa
        titlebg2: 'rgb(255, 234, 194)',
        titlebgdark: '#123456',
        underlinebg: 'rgb(255, 234, 194)',
      },
      maxWidth: {
        "c-1390": "1390px", // Thiết lập max-w-c-1390 là 1390px
      },
      padding: {
        '0': '0', // Tạo lớp px-0 với giá trị 0 cho padding-left và padding-right
        '7.5': '1.875rem', // Tạo lớp px-7.5 với giá trị 1.875rem cho padding-left và padding-right
        '17.5': '4.375rem', // Tạo lớp px-17.5 với giá trị 4.375rem cho padding-left và padding-right
        "35": "8.75rem", // Thiết lập pt-35 là 8.75rem
        "25": "25px", // Thiết lập pb-25 là 25px
        '22.5': '5.625rem', // Tạo lớp py-22.5 với giá trị 5.625rem cho padding-top và padding-bottom
        "46": "11.5rem", // Thiết lập pt-46 là 11.5rem
        '27.5': '6.875rem', // Tạo lớp py-27.5 với giá trị 6.875rem cho padding-top và padding-bottom
      },
      gap: {
        "32.5": "8.125rem", // Thiết lập gap-32.5 là 8.125rem
        "7.5": "1.875rem", // Thiết lập gap-7.5 là 1.875rem
        "12.5": "3.125rem", // Thiết lập gap-12.5 là 3.125rem
        "42.5": "10.625rem", // Thiết lập gap-42.5 là 10.625rem
      },
      margin: {
        "4.5": "1.125rem", // Thiết lập mb-4.5 là 1.125rem 
        '17.5': '4.375rem',
      },
      fontSize: {
        'hero': ['44px', { lineHeight: '58px' }],
        'sectiontitle': ['14px', { lineHeight: '22px' }],
        'itemtitle': ['26px', { lineHeight: '32px',}],
        'sectiontitle3': ['44px', { ineHeight: '55px',}],
        'para2': ['22px', { ineHeight: '35px', }],
        'sectiontitle4': ['34px', { lineHeight: '48px', }],
      },
      inset: {
        '11.5': '2.875rem', // Tạo lớp left-11.5 với giá trị 2.875rem
      },
      zIndex: {
        '1': '1', // Tạo lớp z-1 với giá trị 1
        '-1': '-1', // Tạo lớp z--1 với giá trị -1
      },
      spacing: {
        '6.5': '1.625rem', // Định nghĩa khoảng cách 6.5 là 1.625rem
        '7.5': '1.875rem', // Định nghĩa khoảng cách 7.5 là 1.875rem
        '30': '7.5rem', // Định nghĩa khoảng cách 30 là 7.5rem
        '4.5': '1.125rem', // Định nghĩa giá trị 4.5 cho spacing 1.125rem
        '15': '3.75rem', // Định nghĩa giá trị 15 cho spacing 3.75rem
        '12.5': '3.125rem', // Định nghĩa giá trị 12.5 cho mt 3.125rem
      },
      boxShadow: {
        'solid-3': '0 0 3px rgba(0, 0, 0, 0.1)',
        'solid-4': '0px 6px 90px rgba(186, 186, 186, 0.5)', 
      },
      inset: {
        '-25': '-6.25rem', // Giá trị tương ứng với -100px
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
     function ({ addComponents }) {
      addComponents({
        '.before\\:absolute::before': {
          position: 'absolute',
          content: '""',
        },
        '.before\\:bottom-0::before': {
          bottom: '0',
        },
        '.before\\:left-0::before': {
          left: '0',
        },
        '.before\\:-z-1::before': {
          zIndex: '-1',
        },
        '.before\\:h-1::before': {
          height: '0.25rem',
        },
        '.before\\:w-full::before': {
          width: '100%',
        },
        '.before\\:bg-underlinebg::before': {
          backgroundColor: 'rgb(255, 234, 194)', // Màu gạch chân
        },
      });
    },
  ],
}