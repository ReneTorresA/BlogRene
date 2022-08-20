import Navbar from "../componentes/navbar";
import Card from "../componentes/card";
import Footers from "../componentes/footer";

const Cursos = () => {

  const tarjetas = [
    {
      id: "0",
      titulo:
        "Crear servidor de minecraft con/sin mods última versión en simples pasos",
      descripcion:
        "Si quieres hostear tu propio servidor de minecraft para jugar con tus amigos sin abrir puertos de la forma más simple ¡ENTRA AQUÍ!",
      fecha: "Agosto, 18 2022",
      imagen:
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_The-Wild-Update_540x300.jpg",
    },
    {
      id: "1",
      titulo:
        "Crear servidor de minecraft con/sin mods última versión en simples pasos",
      descripcion:
        "caca",
      fecha: "Agosto, 18 2022",
      imagen:
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_The-Wild-Update_540x300.jpg",
    },
  ];
    
  return (
    <>
      <Navbar />
      
      <div className="container">
        <div className="row ms-auto d-flex mb-5 justify-content-center text-center">
        <h1>Listado de cursos</h1>
          <div className="col-4 d-flex justify-content-center">
            <Card item={tarjetas[0]} />
          </div>

          <div className="col-4 d-flex justify-content-center">
            <Card item={tarjetas[1]} />
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Cursos;
