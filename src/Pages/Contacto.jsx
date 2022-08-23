import Navbar from "../componentes/navbar";
import Footers from "../componentes/footer";

const Contacto = () => {
  return (<div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center">
        <h1>¿Te gustaría contactarme? Mandame un correo a:</h1>
        <h2 className="text-warning">renetorresop@gmail.com</h2>
      </div>
      <Footers />
    </div>
  );
};

export default Contacto;
