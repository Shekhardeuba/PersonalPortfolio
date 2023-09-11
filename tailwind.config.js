/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
      fontSize: {
        'xs': '.75rem', // Example text size
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem', // This is already included by default
        '2xl': '1.5rem',
        // ... other sizes
      },
    },
  },
  plugins: [],
}

