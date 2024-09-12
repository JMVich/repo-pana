/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'Panadero': "url('./assets/Panadero.jpg')"
      }
    },
  },
  plugins: [],
};
