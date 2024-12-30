/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fondo-save' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735229051/_MG_2670-1_syiydx.jpg')",
        'fondo-save-desk' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735508433/Dise%C3%B1o_sin_t%C3%ADtulo_6_xy3ozy.png')"
      },
      colors:{
        principal: 
        {
          light: '#d0bcab',
          dark: '#a8ad9a',
        }
      }
    },
  },
  plugins: [],
};