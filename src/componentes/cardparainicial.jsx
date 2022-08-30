import { NavLink ,Link, Navigate} from "react-router-dom";

function Card2({item}) {
  return (
    <div className="card border-secondary justify-content-center">
      <h6 className="card-subtitle mb-1 text-muted text-end mt-1">{item.fecha}</h6>
      <img className="card-img-top" src={item.imagen} alt="Card image cap" />
      <div className="card-body text-center justify-content-center">
        <h5 className="card-title ">{item.titulo}</h5>
        <p className="card-text ">
          {item.descripcion}
          <Link to={item.ruta} className="stretched-link"></Link>
        </p>
        <p className="card-text text-start text-muted">Por René Torres</p>
      </div>
    </div>
  );
}

export default Card2;