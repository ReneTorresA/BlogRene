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
      recursos: [
        { titulo: "Minecraft server", link: "https://www.minecraft.net/en-us/download/server" },
        { titulo: "Java kit", link: "https://www.oracle.com/java/technologies/downloads/#jdk18-windows" },
        { titulo: "Ngrok", link: "https://ngrok.com/" },
      ],
    },
    {
      url: "https://www.youtube.com/embed/BS7L5sbnAjU",
      title: "Crear servidor de minecraft con mods",
      recursos: [
        { titulo: "Ngrok", link: "https://ngrok.com/", id:"1" },
        { titulo: "Server Forge", link: "https://files.minecraftforge.net/net/minecraftforge/forge/" ,id:"2"},
        { titulo: "Java kit", link: "https://www.oracle.com/java/technologies/downloads/#jdk18-windows" },
        { titulo: "Página para descargar mods", link: "https://www.curseforge.com/minecraft/modpacks" ,id:"3"},
      ],
    },
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
          <Descrip1 id={id} urlss={urls} />
          <div className="ms-3 mt-3 col-3">
            <Link className="btn btn-outline-warning" type="button" to="/cursos">Volver</Link></div>
          
        </div>

      </div>
      <Footers />
    </>
  );
};

export default Curso;
