import { Modal } from './Modal'
import gift from '../assets/gift.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DatosBancarios = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className=" bg-principal-dark mt-20 flex flex-col justify-center items-center py-20">
        <img src={gift} alt="regalo" className="w-40 text-white" data-aos= 'fade-up'/>
        <p className='text-white text-lg text-center px-5 md:px-0' data-aos= 'fade-up'>Si deseás hacernos un regalo te dejamos nuestros datos</p>
        <Modal/>
    </div>
  )
}

export default DatosBancarios