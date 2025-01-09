/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1200px',
    },
  },
  plugins: [],
}

