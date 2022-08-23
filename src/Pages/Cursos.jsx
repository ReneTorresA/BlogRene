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
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="container">
        <div className="row ms-auto d-flex mb-5 justify-content-center text-center">
        <h1 className="text-info mb-3">Listado de cursos variados</h1>
          <div className="mb-5 col-4 d-flex justify-content-center">
            <Card item={tarjetas[0]} />
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Cursos;
