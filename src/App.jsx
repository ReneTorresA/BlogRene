import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./Pages/Contacto";
import Homepage from "./Pages/Homepage";
import "bootswatch/dist/darkly/bootstrap.min.css"
import Notfound404 from "./Pages/Notfound404";
import Plantillacourse from "./Pages/Cursosplantilla";
import Curso from "./componentes/curso";
import Cursos from "./Pages/Cursos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="cursos" element={<Cursos/>}></Route>
        <Route path="/cursos/:id" element={<Curso />} />
        <Route path="*" element={<Notfound404 />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
