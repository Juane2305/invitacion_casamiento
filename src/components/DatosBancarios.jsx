import { Modal } from './Modal'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiGift } from "react-icons/ci";


const DatosBancarios = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`mt-20 flex flex-col justify-center items-center py-20 gap-y-5 bg-[#FAF3E0] text-center text-black`}>
        <CiGift className='size-32'/>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={`text-center px-5 md:px-0 text-xl`} data-aos= 'fade-up'>Si deseás hacernos un regalo te dejamos nuestros datos</p>
          <Modal/>
        </div>
    </div>
  )
}

export default DatosBancarios