import Navbar from "../componentes/navbar";
import Footers from "../componentes/footer";
import Curso from "../componentes/curso";
import {Outlet} from 'react-router-dom'



const Plantillacourse = () => {
  return (
    <div className="container">
      <Navbar />
      <Footers />
      <Curso/>
      <Outlet />
    </div>
    
  );
};

export default Plantillacourse;
