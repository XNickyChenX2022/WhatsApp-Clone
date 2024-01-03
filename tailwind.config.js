/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2': '-1px 4px 20px -6px rgba(0,0,0, 0.75)',
      },
    },
  },
  plugins: [],
}
  

