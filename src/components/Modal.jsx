import { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";


export const Modal = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className="py-4 px-6 border-2 rounded-lg mt-5 transform transition-transform duration-300 ease-in-out hover:transition hover:scale-105 hover:shadow-lg border-principal-dark text-white bg-principal-dark hover:bg-transparent hover:text-green-900 text-xl" data-aos= 'fade-up'
        onClick={() => setIsOpen(true)}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-principal-light bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg flex flex-col justify-center items-center border-8 border-principal-light">
            <div className="flex flex-col justify-center space-y-7">
              <h2 className="text-center font-bold text-2xl">Datos Bancarios</h2>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-semibold">Nombre del titular:</span>{" "}
                  Juan Pablo Glovaski
                </p>
                <p className="text-lg">
                  <span className="font-semibold">CBU:</span> 0720708488000002961004
                  <button
                    className="ml-3 "
                    onClick={() => copiarTexto('0720708488000002961004')}
                  >
                    <IoCopyOutline className="text-principal-light"/>
                  </button>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Alias:</span> juampi.glovaski
                  <button
                    className="ml-3 "
                    onClick={() => copiarTexto('juampi.glovaski')}
                  >
                    <IoCopyOutline className="text-principal-light"/>
                  </button>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">DNI:</span> 41230670
                </p>
                <p className="font-semibold text-lg">Banco Santander</p>
              </div>
              <button className="bg-principal-light  border-principal-light py-4 rounded-lg text-white font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" onClick={() => setIsOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
