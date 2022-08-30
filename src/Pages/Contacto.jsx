import Navbar from "../componentes/navbar";
import Footers from "../componentes/footer";

const Contacto = () => {
  return (
    <div className="row justify-content-center">
      <Navbar />
      <div className="col-md-12 text-center">
        <h3>¿Te gustaría contactarme? </h3>
        <h3>Escríbeme aquí abajo 😸</h3>
      </div>
      <div className="col-md-12">
        <iframe
          className="embed-responsive-item"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfiY4MFvMxeeKlcrAdhaZWtQop9_qCqFI4249UV0TUKCFrg0w/viewform?embedded=true"
          width="100%"
          height="700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          allowfullscreen
        >
        </iframe>
     
        
      </div>

      <div className="row">
      <Footers />

      </div>
      
    </div>
  );
};

export default Contacto;
