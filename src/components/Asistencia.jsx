import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Asistencia = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='py-20 bg-[#FAF3E0] bg-fixed'>
        <div className='h-full flex flex-col justify-center items-center space-y-2'>
            <h2 className='text-4xl font-thin text-center text-gray-700' data-aos= 'fade-up'>Confirmación de Asistencia</h2>   
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPjx4s5j-r4WJZfJjhY3I4oyNiOuK1u3rJv-kaE0is2xjd9Q/viewform?usp=dialog" target='__blank' data-aos= 'fade-up'><button className='py-4 px-6 border-2 rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:transition hover:scale-105 hover:shadow-lg border-principal-dark text-white bg-principal-dark hover:bg-transparent hover:text-green-900 text-xl'>Confirmar asistencia</button></a>
        </div>
    </div>
  )
}

export default Asistencia