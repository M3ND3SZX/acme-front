/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
          colors: {
          'amarelo': '#F0CD13',
          'preto': '#000000',
          'branco': '#ffffff',

          },
          zIndex: {
              img: '-1',
          }
      }
  },
    plugins: [],
  }