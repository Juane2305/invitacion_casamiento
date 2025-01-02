import React from 'react'
import music from '../assets/music.svg'

const Canciones = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
        <img src={music} alt="regalo" className="text-gray-900 size-48"/>
        <p className='text-gray-700 text-lg text-center px-5 md:px-0'>¡Recomendanos canciones que no pueden faltar en la fiesta!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3UlnwNxSZmuFsiU1P9cQ83CMKtd3ioLJX_uX5Z7_-xOI3GQ/viewform?usp=dialog" target='__blank'><button className=' py-4 px-6 rounded-lg border-2 text-gray-700 hover:text-black hover:border-gray-900 hover:transition font-semibold mt-5 transform transition-transform ease-in-out duration-300'>Recomendar canción</button></a>
    </div>
  )
}

export default Canciones
