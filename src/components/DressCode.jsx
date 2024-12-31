import React from 'react'
import dressCode from '../assets/dress-code.svg'


const DressCode = () => {
  return (
    <div className="  mt-20 flex flex-col justify-center items-center py-20">
        <h3 className='text-gray-950 text-4xl text-center px-5 md:px-0 font-thin'>Dress Code</h3>
        <img src={dressCode} alt="regalo" className="w-56 pt-10"/>
    </div>
  )
}

export default DressCode