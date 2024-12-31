
import arrow from '../assets/arrow.svg'
import MusicPlayer from './MusicPlayer'

const ImagenPrincipal = () => {
  return (
    <div className='h-screen w-full bg-orange-100'>
        <div className='flex md:hidden bg-fondo-save bg-center bg-cover bg-scroll'>
            <div className='absolute'><MusicPlayer/></div>
            <div className='flex h-screen w-full justify-center items-end mb-10'>
                <a href="#info"><img src={arrow} alt="flecha hacia abajo" className='size-12 animate-pulse mb-20'/></a>
            </div>
        </div>
        <div className='hidden md:flex bg-fondo-save-desk  h-screen w-full bg-center bg-no-repeat bg-cover bg-fixed'>
        <div className='absolute'><MusicPlayer/></div>
            <div className='flex justify-center items-end w-full'>
                <a href="#info"><img src={arrow} alt="flecha hacia abajo" className='size-12 mb-10 animate-pulse'/></a>
            </div>
        </div>
    </div>
  )
}

export default ImagenPrincipal