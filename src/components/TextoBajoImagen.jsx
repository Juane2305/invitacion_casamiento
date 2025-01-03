import Countdown from "./Countdown"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const TextoBajoImagen = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className=" bg-principal-light py-10" id="info">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-2xl text-slate-100 uppercase text-center" data-aos= 'fade-in'>¡Comienza la cuenta regresiva!</h2>
            <Countdown/>
        </div>
    </div>
  )
}
