import Navbar from "../componentes/navbar";
import Footers from "../componentes/footer";

const Contacto = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center">
        <h3>¿Te gustaría contactarme? </h3>
        <h3>Escríbeme aquí abajo 😸</h3>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfiY4MFvMxeeKlcrAdhaZWtQop9_qCqFI4249UV0TUKCFrg0w/viewform?embedded=true"
          width="640"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </div>
    
      <Footers />
    </div>
  );
};

export default Contacto;
