import React from "react";
import { NavLink } from "react-router-dom";
const PlantillaCurso = ({ info }) => {
  return (
    <div className="container  100vh">
      <section className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2 mt-5 text-top  mb-3">{info.titulo}</h2>
              </div>

              <div className="col-lg-12">
                <p className="text-left">{info.descripcion}</p>
              </div>

              <div className="col-lg-12 justify-content-right mx-auto">
                <p className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-mortarboard"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                  </svg>{" "}
                  Profesor: {info.profesor}
                </p>
              </div>

              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-right mx-auto">
                    <p className="p">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-watch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                        <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
                      </svg>{" "}
                      Duración: {info.duracion}
                    </p>
                  </div>

                  <div className="col-lg-4 d-flex justify-content-right">
                    <p className="p">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-bar-chart-line"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                      </svg>{" "}
                      Nivel: {info.nivel}
                    </p>
                  </div>

                  <div className="col-lg-4"></div>
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center"></div>
            </div>
          </div>

          <div className="col-lg-6 my-5">
            <img
              className="mx-auto d-block img-fluid"
              src={info.foto}
              alt={info.alt}
            ></img>
          </div>

          <div className="col-lg-12">
            <h1 className="h3 text-center">Apuntes escritos</h1>

            <div className="list-group">
                {info.data.map((datoss) => (
                  <a key={datoss.id}
                    href={datoss.link}
                    target="_blank"
                    type="button"
                    className="btn btn-default list-group-item list-group-item-action "
                  >
                    {datoss.name}
                  </a>
                ))}

            </div>
          </div>

          <div>ㅤ</div>
          <div className="col-lg-12">
            <h1 className="h3 text-center">Ayudantías grabadas (en proceso)</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlantillaCurso;
