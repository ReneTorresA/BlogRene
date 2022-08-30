import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="text-success navbar-brand" to="/">
          El Blog de René Torres 👺
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-rg-0">
            <li className="nav-item">
              <a className="nav-link text-info active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-info nav-link active"
                aria-current="page"
                href="/universidad"
              >
                Ayudantías Usach
              </a>
            </li>
            <li className="nav-item">
              <a className="text-info nav-link active" aria-current="page" href="/cursos">
                Cursos variados
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-info nav-link active"
                aria-current="page"
                href="/contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;