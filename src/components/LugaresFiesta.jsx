import React from 'react'
import copas from "../assets/copas.svg";
import rings from "../assets/rings.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
   

const LugaresFiesta = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="w-full pt-10 flex flex-col items-center gap-y-16 font-eleganteText py-10 border-b-2 border-[#D4AF37]">
      <h3 className="text-center text-3xl font-thin" data-aos="fade-up">
        6 DE ABRIL DE 2025
      </h3>
      <section className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36">
        <div
          className=" flex flex-col justify-center items-center gap-y-3"
          data-aos="fade-left"
        >
          <img src={copas} alt="" className="size-40" />
          <h2 className="text-center font-semibold text-2xl tracking-wider">
            FIESTA
          </h2>
          <p className="font-extralight text-xl text-center px-5 text-gray-700">
            La fiesta se realizará en el salón Terra Oliva a las 16:00hs <br /> ¡Te esperamos
            para festejar juntos!
          </p>
        </div>
      </section>
      <a href="https://maps.app.goo.gl/FC3Y7jit4SsuoCuW6" target="_blank">
        <button className="border-2 border-[#D4AF37] py-3 px-8 rounded-full text-[#D4AF37] font-bold hover:bg-[#D4AF37] hover:text-white mt-5 md:mt-10 transition">
            CÓMO LLEGAR
        </button>
      </a>
    </div>
  )
}

export default LugaresFiesta
