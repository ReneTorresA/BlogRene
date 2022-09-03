import Navbar from "../componentes/navbar";
import Card from "../componentes/card";
import Footers from "../componentes/footer";

const Cursos = () => {

  const tarjetas = [
    {
      id: "0",
      titulo:
        "Crear servidor de minecraft (sin mods) última versión en simples pasos",
      descripcion:
        "Si quieres hostear tu propio servidor de minecraft para jugar con tus amigos sin abrir puertos de la forma más simple ¡ENTRA AQUÍ!",
      fecha: "18/08/2022",
      imagen:
        "https://i.postimg.cc/yxv5p2ry/SIN-MODS.png",
    },
    {
      id: "1",
      titulo:
        "Crear servidor de minecraft (con mods) última versión en simples pasos",
      descripcion:
        "Vídeo tutorial de como crear un servidor de minecraft para jugar con tus amigos sin tener que abrir los puertos de tu router usando mods",
      fecha: "23/08/2022",
      imagen:
        "https://i.postimg.cc/Jz9FFNKv/SIN-MODS-1.png",

        
    },
    {
      id: "2",
      titulo:
        "Tesis USACH en Overleaf / tutorial más tips y consejos",
      descripcion:
        "Plantilla de Overleaf para hacer la tesis en la USACH y un tutorial enseñando a usar Overleaf más tips y cosejos útiles.",
      fecha: "03/09/2022",
      imagen:
        "https://i.postimg.cc/KvPwNj0Q/2.png",

        
    },
  ];
    
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="container">
        <div className="row  d-flex mb-5 justify-content-center text-center">
        <h1 className="mb-3">Tutoriales y vídeos variados</h1>
          <div className="mb-5 col-md-4 d-flex justify-content-center">
            <Card item={tarjetas[2]} />
          </div>
          <div className="mb-5 col-md-4 d-flex justify-content-center">
            <Card item={tarjetas[0]} />
          </div>
          <div className="mb-5 col-md-4 d-flex justify-content-center">
            <Card item={tarjetas[1]} />
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Cursos;
