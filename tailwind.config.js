

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
  // content: [
  //   "./src/index.html",
  //       "./src/**/*.{js,ts,jsx,tsx}",
  //       "./node_modules/flowbite/**/*.js",
  // ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}', './node_modules/flowbite/**/*.js'],
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin', 'taos/plugin')
  ],
});