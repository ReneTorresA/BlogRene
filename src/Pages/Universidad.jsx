import Navbar from "../componentes/navbar";
import Footers from "../componentes/footer";
import Card2 from "../componentes/cardparainicial";
const Universidad = () => {
  const tarjetas = [
    {
      id: "0",
      ruta: "/reactapp/universidad/calculo3",
      titulo: "Cálculo III para Ingeniería 💀",
      descripcion:
        "Papeo de cálculo 3 🐵",
      fecha: "22/08/2022",
      imagen: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: "1",
      ruta: "/reactapp/universidad/metnum",
      titulo: "Métodos Numéricos para Ingeniería Mecánica",
      descripcion:
        "Aquí encontrarás material y guías para la asignatura de métodos numéricos para ingeniería mecánica",
      fecha: "22/08/2022",
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
  ];
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container">
        <div className="row ms-auto d-flex mb-5 justify-content-center text-center">
        <div className="mb-3"><h1>Ayudantías Universidad 🐔 </h1></div>
        
        <div className="col-6 d-flex justify-content-center">
          <Card2 item={tarjetas[0]} />
        </div>

        <div className="col-6 d-flex justify-content-center ">
          <Card2 item={tarjetas[1]} />
        </div>
      </div>
      </div>
      <Footers />
    </div>
  );
};

export default Universidad;
