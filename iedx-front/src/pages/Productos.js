import React from "react";
import Page from "../components/Page";
import "../css/products-styles.css";
import ImgMaquinaria from "../imagenes/maquinaria.jpg";
import ImgEnvases from "../imagenes/envases.jpg";
import ImgLubricantes from "../imagenes/lubricantes.jpg";
import { Link } from "react-router-dom";

const Productos = (props) => {
  return (
    <Page title="Productos - IEDX México">
      <main className="main products1">
        <div>
          <br />
        </div>
        <div className="container products1">
          <div className="cards1">
            <Link to="/categoria/1">
              <h4>
                MAQUINARIA Y REFACCIONES
                <br />
                (IS Machines, Press Machines and Spare Parts)
              </h4>
              <img src={ImgMaquinaria} alt="No Se Encontró La Imágen" />
              <p>
                La integración total del sistema es extremadamente importante en
                la producción de contenedores de alta calidad y alta velocidad.
                MAVSA diseña y produce subsistemas que maximizan el control y la
                regulación general del peso, la forma y la temperatura.
              </p>
            </Link>
          </div>

          <div className="cards1">
            <Link to="/categoria/2">
              <h4>
                MANEJO DE ENVASES
                <br />
                (Ware Handling)
              </h4>
              <img src={ImgEnvases} alt="No Se Encontró La Imágen" />
              <p>
                Nuestro grafito es grado isotrópico lo que le confiere una
                estructura y tamaño de partícula homogénea, otorgándole mejores
                propiedades al material: mayor durabilidad y resistencia a la
                alta temperatura.
              </p>
            </Link>
          </div>

          <div className="cards1">
            <Link to="/categoria/3">
              <h4>LUBRICANTES</h4>
              <img src={ImgLubricantes} alt="No Se Encontró La Imágen" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur aut reprehenderit ut, numquam amet iusto
                exercitationem sit commodi, laudantium dolores quibusdam esse
                quaerat autem perferendis accusamus cupiditate, corrupti ullam
                inventore!
              </p>
            </Link>
          </div>
        </div>
        <div>
          <br />
        </div>
      </main>
    </Page>
  );
};

export default Productos;
