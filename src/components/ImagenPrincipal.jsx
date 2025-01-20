import arrow from "../assets/arrow.svg";
import MusicPlayer from "./MusicPlayer";
import nombres from "../assets/nombresInicio.svg";

const ImagenPrincipal = () => {
  return (
    <div className="h-screen w-full bg-orange-100">
  <div className="absolute">
    <MusicPlayer />
  </div>
  <div className="relative flex flex-col justify-center items-center h-screen w-full text-center bg-fondo-elegante lg:bg-fixed bg-cover bg-no-repeat bg-center border-b-2 border-[#D4AF37]">
    
    <img
      src={nombres}
      alt="Nombres de los novios"
      className="w-[1200px] lg:w-[700px]"
    />

    <a href="#info">
      <img
        src={arrow}
        alt="flecha hacia abajo"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 animate-pulse"
      />
    </a>
  </div>
</div>
  );
};

export default ImagenPrincipal;
