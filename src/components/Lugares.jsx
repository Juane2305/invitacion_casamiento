import copas from '../assets/copas.svg'
import rings from '../assets/rings.svg'

const Places = () => {
  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-20'>
      <section className='flex flex-col md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3'>
          <img src={rings} alt="" className='size-40'/>
          <h2 className='text-center font-bold text-2xl'>CIVIL</h2>
          <p className='font-extralight text-xl text-center px-5'>La ceremonia civil se realizará en el salón Terra Oliva <br /> a las 13:00hs.</p>
          
        </div>
        <div className=' flex flex-col justify-center items-center gap-y-3'>
          <img src={copas} alt="" className='size-44'/>
          <h2 className='text-center font-bold text-2xl'>FIESTA</h2>
          <p className='font-extralight text-xl text-center px-5'>Continuaremos con la fiesta en el mismo lugar <br/> ¡Te esperamos para festejar juntos!</p>
          
        </div>
      </section>
        <a href="https://maps.app.goo.gl/4XyzMRjyujMSjckK7" target='__blank'><button className='border-4 border-principal-dark py-3 px-8 rounded-full hover:transition bg-principal-dark text-white font-bold hover:bg-transparent hover:text-gray-900 hover:border-4'>CÓMO LLEGAR</button></a>
    </div>
  )
}

export default Places