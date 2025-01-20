import { Route, Routes } from "react-router-dom"
import { MainPage } from "./views/MainPage"
import Fiesta from "./views/Fiesta"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/fiesta" element={<Fiesta/>}/>
    </Routes>
  )
}

export default App
