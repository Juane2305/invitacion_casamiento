import React from 'react'
import music from '../assets/music.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Canciones = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-20">
        <img src={music} alt="regalo" className="text-gray-900 size-48" data-aos= 'fade-up'/>
        <p className='text-gray-700 text-lg text-center px-5 md:px-0' data-aos= 'fade-up'>¡Recomendanos canciones que no pueden faltar en la fiesta!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3UlnwNxSZmuFsiU1P9cQ83CMKtd3ioLJX_uX5Z7_-xOI3GQ/viewform?usp=dialog" target='__blank' data-aos= 'fade-up'><button className="py-4 px-6 border-2 rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:transition hover:scale-105 hover:shadow-lg border-principal-dark text-white bg-principal-dark hover:bg-transparent hover:text-green-900 text-xl">Recomendar canción</button></a>
    </div>
  )
}

export default Canciones
