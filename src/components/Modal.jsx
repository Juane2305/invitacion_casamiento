import { useState } from "react";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-principal-light py-4 px-6 rounded-lg text-white font-bold mt-5"
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
                  Valentina Elizondo
                </p>
                <p className="text-lg">
                  <span className="font-semibold">CBU:</span> 12345623561
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Alias:</span> vale.elizondo
                </p>
                <p className="text-lg">
                  <span className="font-semibold">DNI:</span> 41412434
                </p>
                <p className="font-semibold text-lg">Banco Santander</p>
              </div>
              <button className="bg-principal-light  border-principal-light py-4 rounded-lg text-white font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4" onClick={() => setIsOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
