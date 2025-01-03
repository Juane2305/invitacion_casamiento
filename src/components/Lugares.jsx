import copas from '../assets/copas.svg'
import rings from '../assets/rings.svg'
import GoogleCalendarButton from './GoogleCalendarButton'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-16'>
      <h3 className='text-center text-3xl font-thin' data-aos= 'fade-up'>6 DE ABRIL DE 2025</h3>
      <section className='flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-up'>
          <img src={rings} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-2xl tracking-wider'>CIVIL</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>La ceremonia civil se realizará en el salón Terra Oliva <br /> a las 13:00hs.</p>
          
        </div>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-up'>
          <img src={copas} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-2xl tracking-wider'>FIESTA</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>Continuaremos con la fiesta en el mismo lugar <br/> ¡Te esperamos para festejar juntos!</p>
          
        </div>
      </section>
        <a href="https://maps.app.goo.gl/4XyzMRjyujMSjckK7" data-aos= 'fade-up' target='__blank'><button className='border-4 border-principal-dark py-3 px-8 rounded-full hover:transition bg-principal-dark text-white font-bold hover:bg-transparent hover:text-gray-700 hover:border-4 mt-5 md:mt-10 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg' >CÓMO LLEGAR</button></a>
        <div className='transform transition-transform duration-300 ease-in-out hover:scale-105' data-aos= 'fade-up'>
          <GoogleCalendarButton/>
        </div>
    </div>
  )
}

export default Places