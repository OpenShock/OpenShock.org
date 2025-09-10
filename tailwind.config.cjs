/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e14a6d',
        secondary: '#6735A5',
        info: '#0C63E7'
      }
    }
  },
  plugins: []
};
