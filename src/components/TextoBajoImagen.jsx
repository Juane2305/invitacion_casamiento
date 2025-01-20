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
    <div className="" id="info">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
            <Countdown/>
        </div>
    </div>
  )
}
