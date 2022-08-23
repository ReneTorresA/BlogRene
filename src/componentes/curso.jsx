import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footers from "./footer";
import { Descrip1 } from "./descripcionpers";
const Curso = () => {
  const { id } = useParams();
  const urls = [
    {
      url: "https://www.youtube.com/embed/wT_J8nzB9g4",
      title: "Hostear minecraft server sin mods",
    },
    { url: "https://www.youtube.com/embed/LrbHTnyO32Y", title: "Introducción a Python" },
  ];

  let componentevideo;
  if (parseInt(id) <= urls.length - 1) {
    componentevideo = (
      <div className="ratio ratio-16x9">
        <iframe
          src={urls[id].url}
          title={urls[id].title}
          allowFullScreen
        ></iframe>
      </div>
    );
  } else {
    componentevideo = <h1>Lo que buscas no existe</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5 min-vh-100">
        <h2>{urls[id].title}</h2>
        <div className="row">
          <div className="col-9">{componentevideo}</div>
          <Descrip1 id={id} />
        </div>
        <div>
        <Link to="/cursos">Volver al inicio OJO</Link>
        </div>
        
      </div>
      <Footers />
    </>
  );
};

export default Curso;
