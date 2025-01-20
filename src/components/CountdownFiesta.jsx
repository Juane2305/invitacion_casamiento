import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CountdownFiesta = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animar solo una vez
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    AOS.refresh(); // Refrescar AOS después de cada actualización
    return () => clearInterval(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const targetDate = new Date("2025-04-06T16:00:00-03:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  }

  if (!timeLeft) {
    return (
      <div className="text-center text-2xl font-bold text-white">
        ¡Llegó el día!
      </div>
    );
  }

  return (
    <section className="bg-[#A3B18A] text-white py-20 border-b-2 border-[#D4AF37] w-full ">
      <div className="w-full flex flex-col items-center justify-center gap-y-5 text-white" data-aos="fade-in">
        <h3 className="text-xl font-light leading-loose">Faltan...</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 text-xl" data-aos="fade-in">
          <div className="flex space-x-16 sm:space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl">{timeLeft.days}</div>
              <span>Días</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl">{timeLeft.hours}</div>
              <span>Horas</span>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl">{timeLeft.minutes}</div>
              <span>Minutos</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl">{timeLeft.seconds}</div>
              <span>Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownFiesta;