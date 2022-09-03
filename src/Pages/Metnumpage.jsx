import React, { useState } from "react";
import Footers from "../componentes/footer";
import Navbar from "../componentes/navbar";
import PlantillaCurso from "../componentes/plantillacursos";

function Metnum() {
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
      {/*
      <div className="container col-lg-12">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Series de Fourier
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Límites y continuidad
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Derivadas parciales
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    */}

      <Footers />
    </>
  );
}

export default Metnum;
