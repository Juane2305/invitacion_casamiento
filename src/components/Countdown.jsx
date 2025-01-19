import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Countdown = () => {
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
    const targetDate = new Date("2025-04-06T13:00:00-03:00");
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
    <div className="flex flex-col items-center justify-center text-white mt-5" data-aos="fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 text-xl font-mono" data-aos="fade-in">
        <div className="flex space-x-16 sm:space-x-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <span>Días</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <span>Horas</span>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <span>Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;