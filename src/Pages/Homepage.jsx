import Navbar from "../componentes/navbar";
import Card from "../componentes/card";
import Footers from "../componentes/footer";

import { NavLink , Link } from "react-router-dom";


const Homepage = () => {
   
  return (
    <>
      <Navbar />
      
      <div className="container">
        <div className="row ms-auto d-flex mb-5 justify-content-center text-center">
        <h1>Listado de cursos</h1>
          <div className="col-4 d-flex justify-content-center">
            <Link to={"cursos"}>Cursos</Link>
            <h1>Cursos</h1>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <h1>Universidad</h1>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Homepage;
