import { BrowserRouter, Route, Routes,browserHistory } from "react-router-dom";
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
        <Route path="/reactapp/"  element={<Homepage />} />
        <Route path="reactapp/universidad" element={<Universidad/>}></Route>
        <Route path="reactapp/contacto" element={<Contacto />}></Route>
        <Route path="reactapp//universidad/metnum" element={<Metnum />}></Route> 
        <Route path="reactapp//universidad/calculo3" element={<Calculo3page />}></Route> 
        <Route path="reactapp/cursos" element={<Cursos/>}></Route>
        <Route path="reactapp/cursos/:id" element={<Curso />} />
        <Route path="reactapp/*" element={<Notfound404 />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
