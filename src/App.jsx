import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Agendamentos from "./Pages/Agendamentos";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="agendamentos" element={<Agendamentos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
