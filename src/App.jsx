import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./Pages/Contacto";
import Homepage from "./Pages/Homepage";
import "bootswatch/dist/darkly/bootstrap.min.css"
import Notfound404 from "./Pages/Notfound404";
import Curso from "./componentes/curso";
import Cursos from "./Pages/Cursos";
import Universidad from "./Pages/Universidad";
import Calculo3page from "./Pages/Calculo3page";
import Metnum from "./Pages/Metnumpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="universidad" element={<Universidad/>}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="/universidad/metnum" element={<Metnum />}></Route> 
        <Route path="/universidad/calculo3" element={<Calculo3page />}></Route> 
        <Route path="cursos" element={<Cursos/>}></Route>
        <Route path="/cursos/:id" element={<Curso />} />
        <Route path="*" element={<Notfound404 />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
