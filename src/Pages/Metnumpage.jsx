import React, { useState } from "react";
import Footers from "../componentes/footer";
import Navbar from "../componentes/navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import PlantillaCurso from "../componentes/plantillacursos";
function Metnum() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const itemsvideo = [
    {
      id: "0",
      titulo: "Ayudantía 1: Repaso Matlab (Parte 1)",
      urlvideo: "https://www.youtube.com/embed/dIlu6kmpyn8",
    },

    {
      id: "1",
      titulo: "Ayudantía 1: Repaso Matlab (Parte 2)",
      urlvideo: "https://www.youtube.com/embed/-9VS9JfxJG8",
    },
    {
      id: "2",
      titulo: "Ayudantía 2: Ajuste de Curvas",
      urlvideo: "https://www.youtube.com/embed/XR0VafgB_3M",
    },
  ];
  console.log(itemsvideo[0].urlvideo);
  const Metnuminfo = {
    id: "0",
    ruta: "/cursos",
    titulo: "Métodos Numéricos - Ayudantías preparados por René Torres.",
    descripcion:
      "Difunde el contenido para que a alguien más le ayude. Si encuentras algún error en los ejercicios por favor comunícate conmigo al correo: rene.torres.a@usach.cl",
    profesor: "René Torres",
    duracion: "--",
    foto: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    alt: "Pantalla de computador con códigos de programación",
    nivel: "Hardcore",
    herramientas: ["Estudiar mucho!"],
    data: [
      {
        name: "(PEP 1) Guía 0 : Repaso de programación Matlab",
        link: "https://drive.google.com/file/d/1uD1VL65WYIVTxh5cBOYdWuQL5rRGR4B1/view",
      },
      {
        name: "(PEP 1) Guía 1 : Ajuste de curvas",
        link: "https://drive.google.com/file/d/1KQ97HFbbuningWYvNd8NujoD0c2gldlZ/view",
      },
      {
        name: "(PEP 2) Sistemas de ecuaciones lineales",
        link: "https://drive.google.com/file/d/1lVf7jpz1uxdlLQQt4sUJJOY41pfdSJVs/view",
      },
      {
        name: "(PEP 2) Ecuaciones diferenciales de primer orden",
        link: "https://drive.google.com/file/d/1-EXRUXBCnc8I3dOWUoyJSZhRXoUvSNU3/view",
      },
      {
        name: "(PEP 2) Sitemas de ecuaciones diferenciales y ecuación diferencial de 2do orden",
        link: "https://drive.google.com/file/d/1KnIZhrfV94QcbojF2AC47KIC3uIOZPWW/view",
      },
    ],
    fecha: "",
    imagen: "https://i.postimg.cc/dttVG3ng/1.png",
  };

  return (
    <>
      <Navbar />
      <PlantillaCurso info={Metnuminfo} />

      <div className="container col-lg-12">
        <div className="list-group">
          <>
            <button
              type="button"
              className="btn btn-dark mb-1"
              variant="secondary btn-outline-light"
              onClick={handleShow}
            >
              {itemsvideo[0].titulo}
            </button>

            <Modal size="xl" centered show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container>
                  <div className="container-fluid text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item videos-modales"
                        src={itemsvideo[0].urlvideo}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary btn-outline-light"
                  onClick={handleClose}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>

      <div className="container col-lg-12">
        <div className="list-group">
          <>
            <button
              type="button"
              className="btn btn-dark mb-1"
              variant="secondary btn-outline-light"
              onClick={handleShow2}
            >
              {itemsvideo[1].titulo}
            </button>

            <Modal size="xl" centered show={show2} onHide={handleClose2}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container>
                  <div className="container-fluid text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item videos-modales"
                        src={itemsvideo[1].urlvideo}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary btn-outline-light"
                  onClick={handleClose2}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>

      <div className="container col-lg-12">
        <div className="list-group">
          <>
            <button
              type="button"
              className="btn btn-dark mb-1"
              variant="secondary btn-outline-light"
              onClick={handleShow3}
            >
              {itemsvideo[2].titulo}
            </button>

            <Modal size="xl" centered show={show3} onHide={handleClose3}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container>
                  <div className="container-fluid text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item videos-modales"
                        src={itemsvideo[2].urlvideo}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary btn-outline-light"
                  onClick={handleClose3}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Metnum;
