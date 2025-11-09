/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // IMPORTANT: use class strategy (we'll toggle `dark` on <html>)
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // small palette tweaks so dark theme looks nice
        brand: {
          50: '#fffbeb',
          600: '#f59e0b', // yellow-600
        }
      }
    }
  },
  plugins: [],
}
