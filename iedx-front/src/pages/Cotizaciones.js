import React from "react";
import Page from "../components/Page";
import  "../css/cotizaciones-styles.css";
import { Link } from "react-router-dom";
import ImgMaquinaria from "../imagenes/144-D FEEDER.gif";
import moldes from "../imagenes/moldes.jpg";
import moldes2 from "../imagenes/moldes2.jpg";
import graf from "../imagenes/grafitopag.jpg";
import graf2 from "../imagenes/grafito2.jpg";
import cadsin from "../imagenes/cadenasilen.jpg"
import aceite from "../imagenes/aceite_industrial.png"

const Cotizaciones = (props) => {
  return (
    <Page title="Cotizaciones - IEDX México">
      <main class="main products">
        <div>
          <br />
        </div>
        <div class="container products">
          <div class="cards-coti">
            <Link to="/cotizaciones/Maquinaria y refacciones">
              <h4>
                MAQUINARIA Y REFACCIONES
                <br />
              </h4>
            </Link>
          </div>
        </div>
        <div class="imagen1">
          <img
            src={ImgMaquinaria}
            alt="Imagen de maquinaria y equipo variable"
          />
          <img
            src={moldes}
            alt="Imagen de maquinaria y equipo variable"
          />
          <img
           src={moldes2}
            alt="Imagen de maquinaria y equipo variable"
          />
        </div>
        <div class="container products">
          <div class="cards-coti">
          <Link to="/cotizaciones/Manejo">
              <h4>
                MANEJO DE ENVASES
                <br />
              </h4>
            </Link>
          </div>
        </div>
        <div class="imagen1">
          <img
            src={graf}
            alt="Imagen de manejo de envases"
          />
          <img
            src={graf2}
            alt="Imagen de manejo de envases"
          />
          <img
            src={cadsin}
            alt="Imagen de manejo de envases"
          />
        </div>
        <div class="container products">
          <div class="cards-coti">
            <a href="/">
              <h4>LUBRICANTES (Proximamente)</h4>
            </a>
          </div>
        </div>
        <div class="imagen1">
          <img
            src={aceite}
            alt="Imagen de maquinaria y equipo variable"
          />
        </div>
        <div>
          <br />
        </div>
      </main>
    </Page>
  );
};

export default Cotizaciones;
