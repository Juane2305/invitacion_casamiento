import React from 'react'

const Asistencia = () => {
  return (
    <div className='py-20 bg-fondo-tela bg-fixed'>
        <div className='h-full flex flex-col justify-center items-center space-y-2'>
            <h2 className='text-4xl font-thin text-center'>Confirmación de Asistencia</h2>   
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPjx4s5j-r4WJZfJjhY3I4oyNiOuK1u3rJv-kaE0is2xjd9Q/viewform?usp=dialog" target='__blank'><button className='bg-principal-dark py-4 px-6 rounded-lg text-white font-bold mt-5'>Confirmar asistencia</button></a>
        </div>
    </div>
  )
}

export default Asistencia