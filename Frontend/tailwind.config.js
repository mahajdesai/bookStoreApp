/** @type {import('tailwindcss').config}*/

export default {
  content: ["./index.html", "./src/**/*.{js,ts,,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
