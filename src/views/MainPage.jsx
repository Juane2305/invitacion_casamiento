import DatosBancarios from '../components/DatosBancarios'
import { FocusCardsDemo } from '../components/FocusCardsDemo'
import ImagenPrincipal from '../components/ImagenPrincipal'
import Lugares from '../components/Lugares'
import {TextoBajoImagen}  from '../components/TextoBajoImagen'

export const MainPage = () => {
  return (
    <>
      <ImagenPrincipal/>
      <TextoBajoImagen/>
      <Lugares/>
      <FocusCardsDemo/>
      <DatosBancarios/>
    </>
)
}
