/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: '#4D4DFF',
        ink: '#0a0a0a',
        butter: '#ffb800',
        cream: '#fdfbf7',
        blush: '#ff5280',
        lavender: '#6b5bff',
      },
      boxShadow: {
        brut: '8px 8px 0px #0a0a0a',
      }
    },
  },
  plugins: [],
}
