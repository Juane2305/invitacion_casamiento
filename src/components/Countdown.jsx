import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2025-04-06T13:00:00-03:00"); // Hora de Argentina
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

    return null; // Fecha ya alcanzada
  }

  if (!timeLeft) {
    return (
      <div className="text-center text-2xl font-bold text-white">
        ¡Llegó el día!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-white mt-5">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 text-xl font-mono">
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