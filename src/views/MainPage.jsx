import Asistencia from '../components/Asistencia'
import Canciones from '../components/Canciones'
import DatosBancarios from '../components/DatosBancarios'
import { FocusCardsDemo } from '../components/FocusCardsDemo'
import Footer from '../components/Footer'
import ImagenPrincipal from '../components/ImagenPrincipal'
import Lugares from '../components/Lugares'
import {TextoBajoImagen}  from '../components/TextoBajoImagen'
import TextoFinal from '../components/TextoFinal'

export const MainPage = () => {
  return (
    <>
      <ImagenPrincipal/>
      <TextoBajoImagen/>
      <Lugares/>
      <FocusCardsDemo/>
      <DatosBancarios/>
      <Canciones/>
      <Asistencia/>
      <TextoFinal/>
      <Footer/>
    </>
)
}
