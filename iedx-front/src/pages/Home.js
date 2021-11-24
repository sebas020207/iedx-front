import React from "react";
import Page from "../components/Page";
import { Link } from "react-router-dom";
import "../css/styles.css";
import BreadCrum from "../components/BreadCrum";
import IndustriaDelVidrio from "../imagenes/vidriox.jpg";

const links = [{ name: "Inicio", path: "/" }];

const Home = (props) => {
  // <BreadCrum links={links} />
  return (
    <Page title="IEDX MÉXICO">
      <div className="mainindex menu">
        <div className="contenedor">
        <img
          src={IndustriaDelVidrio}
          alt="Imagen Industria Vidriera"
          width="100%"
        />
        <div className="centrado">
          <p>INDUSTRIA DEL VIDRIO</p>
          <p id="maquinaria">MAQUINARIA Y MANEJO</p>
        </div>
        </div>
        <div id="debajo">
          <div className="contenedor">
            <div>
              <p>IEDX MÉXICO INTERNACIONAL </p>
              <p>
                Es una empresa 100% mexicana, dedicada a ofrecer soluciones de{" "}
                <br />
                tecnología e ingeniería especializada. Fundamentalmente enfocada{" "}
                <br />a la industria del vidrio, pero con participación en
                diferentes <br />
                industrias.​
              </p>
            </div>
            <div className="boton-main-content">
              <Link to="/nosotros" className="boton_2">
                OBTEN MAS INFORMACION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
