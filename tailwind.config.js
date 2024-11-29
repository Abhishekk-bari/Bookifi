/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' }, // Start in the center
          '100%': { transform: 'translateX(-100%)' }, // Exit to the left
        },
      },
      animation: {
        slide: 'slide 300s linear infinite', // Animation starts immediately
      },
    },
  },
  plugins: [],
};
