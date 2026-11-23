/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#244B36',
        leaf: '#6B9B55',
        cream: '#FFF9EF',
        beige: '#F1E7D5',
        gold: '#C49A50',
        charcoal: '#292929',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', 'sans-serif'],
        serif: ['"Playfair Display"', '"Noto Serif Devanagari"', 'serif'],
      },
    },
  },
  plugins: [],
};
