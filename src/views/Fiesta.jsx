import Asistencia from '../components/Asistencia'
import Canciones from '../components/Canciones'
import DatosBancarios from '../components/DatosBancarios'
import DressCode from '../components/DressCode'
import { FocusCardsDemo } from '../components/FocusCardsDemo'
import Footer from '../components/Footer'
import ImagenPrincipal from '../components/ImagenPrincipal'
import LugaresFiesta from '../components/LugaresFiesta'
import TextoFinal from '../components/TextoFinal'
import hojasVerdes from '../assets/hojasVerdes.svg'
import hojasVerdes2 from '../assets/hojasVerdes2.svg'
import hojasVerdesIzq from '../assets/hojasVerdesIzq.svg'
import CountdownFiesta from '../components/CountdownFiesta'
import GoogleCalendar from '../components/GoogleCalendar'

const Fiesta = () => {
  return (
    <div className='font-eleganteText overflow-hidden bg-[#FAF3E0]'>
        <ImagenPrincipal/>
        <CountdownFiesta/>
        <LugaresFiesta/>
        <div className="relative mt-10 pb-10 border-b-2 border-[#D4AF37]">
            <img
              src={hojasVerdes}
              alt="Decoración de hojas"
              className="hidden lg:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-36 lg:w-48 opacity-70"
            />
            <FocusCardsDemo />
            <img
              src={hojasVerdes2}
              alt="Decoración de hojas"
              className="hidden lg:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-36 lg:w-48 opacity-70"
            />
          </div>
          <GoogleCalendar/>
          <div className="relative">
            <img
              src={hojasVerdesIzq}
              alt="Decoración de hojas"
              className="absolute left-[-80px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
            <DressCode />
            <img
              src={hojasVerdes2}
              alt="Decoración de hojas"
              className="absolute right-[-80px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
          </div>
          <div className="my-10 border-b-2 border-[#D4AF37]">
            <DatosBancarios/>
          </div>
      <Canciones/>
      <TextoFinal/>
      <Footer/>
    </div>

  )
}

export default Fiesta
