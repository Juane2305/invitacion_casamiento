import { Modal } from './Modal'
import gift from '../assets/gift.svg'

const DatosBancarios = () => {
  return (
    <div className=" bg-principal-dark mt-20 flex flex-col justify-center items-center py-20">
        <img src={gift} alt="regalo" className="w-40 text-white"/>
        <p className='text-white text-lg'>Si deseás realizarnos un regalo para nuestra luna de miel...</p>
        <Modal/>
    </div>
  )
}

export default DatosBancarios