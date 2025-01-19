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
        'fondo-save-desk' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735508433/Dise%C3%B1o_sin_t%C3%ADtulo_6_xy3ozy.png')",
        'fondo-tela' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735580470/Agregar_un_t%C3%ADtulo-2_iz5elu.png')"
      },
      animation: {
        'custom-bounce': 'custom-bounce 1s infinite',
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
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
}
