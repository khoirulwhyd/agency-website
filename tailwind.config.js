

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./src/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
});