import Countdown from "./Countdown"

export const TextoBajoImagen = () => {
  return (
    <div className=" bg-principal-light py-10" id="info">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-2xl text-slate-100 uppercase text-center">¡Comienza la cuenta regresiva!</h2>
            <Countdown/>
        </div>
    </div>
  )
}
