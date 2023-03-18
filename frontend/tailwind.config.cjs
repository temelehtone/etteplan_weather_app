/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-text': '#262626',
        'gray-text': ' #70757A',
        'gray-border': '#e6e6e6',
        'bg-light-blue': '#E5F6FD',
        'bg-blue': '#00A5E5',
          'body-bg': '#F8F9FA'
      },
    }
  },
  plugins: [],
}