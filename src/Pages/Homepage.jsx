import Navbar from "../componentes/navbar";
import Card2 from "../componentes/cardparainicial";
import Footers from "../componentes/footer";

import { NavLink, Link } from "react-router-dom";

const Homepage = () => {
  const tarjetas = [
    {
      id: "0",
      ruta: "/cursos",
      titulo: "Cursos Variados 💻",
      descripcion:
        "Aquí encontrarás una sección variada de utilidades, cursos y tutoriales de cosas que he aprendido y que quiero compartir con las personas :)",
      fecha: "",
      imagen: "https://i.postimg.cc/dttVG3ng/1.png",
    },
    {
      id: "1",
      ruta: "/universidad",
      titulo: "Ayudantías Universidad 🎓",
      descripcion:
        "Aquí encontrarás los cursos que dicto como ayudante en la USACH, la idea es tener un espacio para acceder de manera fácil e intuitiva al material que comparto",
      fecha: "",
      imagen: "https://i.postimg.cc/s1dF6n7n/2.png",
    },
  ];
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="container">
        <div className="row mb-5 d-flex justify-content-center text-center">
          <h1 className="text-info mb-5">Listado de cursos</h1>

          <div className="col-md-6 d-flex justify-content-center mb-2">

              <Card2 item={tarjetas[0]} />

          </div>
          <div className="col-md-6 d-flex justify-content-center mb-2">
              <Card2 item={tarjetas[1]} />
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Homepage;
