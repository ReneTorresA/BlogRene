import { Link } from "react-router-dom";

const Notfound404 = () => {
  return (

    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Página no encontrada.
        </p>
        <p className="lead">La página que estas buscando no existe.</p>
        <Link to="/reactapp/" className="btn btn-secondary">
          Ir a Inicio
        </Link>
      </div>
    </div>
  );
};

export default Notfound404;
