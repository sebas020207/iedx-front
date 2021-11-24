import React from "react";
import Page from "../components/Page";
import "../css/styles.css";
import "../css/catalogo-styles.css";
import { Link } from "react-router-dom";
import ImgMold from "../imagenes/hojacot.jpg";
import ImgMold2 from "../imagenes/envases.jpg";

const Molderia = (props) => {
  const handleAddProduct = (id) => {
    let productsLocalStorage = localStorage.getItem("products");
    let products = productsLocalStorage
      ? JSON.parse(productsLocalStorage)
      : null;

    if (products) {
      if (products.indexOf(id) === -1) {
        products.push(id);
      }
    } else {
      products = [id];
    }

    localStorage.setItem("products", JSON.stringify(products));
  };

  return (
    <Page title="Molderia - IEDX México">
      <main class="main catalogo">
        <div id="between">
          <br />
        </div>
        <div id="hoja">
          <h4>
            <img
              src={ImgMold}
              alt="Nos encontro la imagen"
              width="41"
              height="24"
            />
            <Link to="/cotizaciones/hojadecotizacion">
              Hoja de Cotización(0)
            </Link>
          </h4>
        </div>
        <div id="ubicacion">
          <h4>
            <span>Usted se encuentra en:</span>{" "}
            <Link to="/cotizaciones">Cotizaciones</Link> {">"}{" "}
            <Link to="/cotizaciones/maquinariayrefacciones">
              Maquinaria_refacciones
            </Link>{" "}
            {">"}{" "}
            <Link to="/cotizaciones/maquinariayrefacciones/molderia">
              Molderia
            </Link>
          </h4>
        </div>
        <div class="barra">
          {" "}
          <hr width="%100" size="3" color="#616161" />
        </div>

        <section id="pantalla-dividida">
          <div class="Filtros">
            <div id="molderia">
              <h1>MOLDERIA</h1>
            </div>
            <div
              id="filtros"
              style={{ boxShadow: "4px 5px 4px rgba(0,0,0,0.2)" }}
            >
              <h2>Filtros</h2>
            </div>
            <div class="opciones">
              <div>
                <label for="empresa[]">
                  <h3>EMPRESA</h3>
                </label>
                <input type="checkbox" name="empresa[]" id="MAVSA" /> MAVSA
                <br />
                <input type="checkbox" name="empresa[]" id="MenE" /> MenE
              </div>
              <div></div>
            </div>
          </div>
          <div class="Tabla">
            <div class="orden">
              <label for="orden">Ordenar por:</label>
              <select name="orden" id="orden">
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
              </select>
            </div>
            <div class="contenidoDeTabla">
              <table style={{ width: "100%", height: "100%" }}>
                <thead style={{ boxShadow: "4px 5px 4px rgba(0,0,0,0.2)" }}>
                  <tr>
                    <th colspan="3">
                      <h2 style={{ textAlign: "left", paddingLeft: "10%" }}>
                        Productos
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={ImgMold2}
                        width="300"
                        height="175"
                        alt="No se Encontró la Imágen"
                      />
                    </td>
                    <td>
                      <h4>Producto 1</h4>
                      <p style={{ fontSize: "small" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli
                        Aliquam orci lectus, malesuada nec posuere nec, tempor
                        et lectus. Phasellus nunc nibh, hendrerit id commodo et,
                        vehicula efficitur dui.
                      </p>
                    </td>
                    <td>
                      <button
                        onClick={() => handleAddProduct(1)}
                        style={{ background: "transparent" }}
                      >
                        <div class="agregar">
                          <p>
                            <img
                              src={ImgMold}
                              alt="Nos encontro la imagen"
                              width="71"
                              height="34"
                            />
                            <br />
                            Agregar a Hoja de Cotización
                          </p>
                        </div>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={ImgMold2}
                        width="300"
                        height="175"
                        alt="No se Encontró la Imágen"
                      />
                    </td>
                    <td>
                      <h4>Producto 2</h4>
                      <p style={{ fontSize: "small" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli
                        Aliquam orci lectus, malesuada nec posuere nec, tempor
                        et lectus. Phasellus nunc nibh, hendrerit id commodo et,
                        vehicula efficitur dui.
                      </p>
                    </td>
                    <td>
                      <a href="#">
                        <div class="agregar">
                          <p>
                            <img
                              src={ImgMold}
                              alt="Nos encontro la imagen"
                              width="71"
                              height="34"
                            />
                            <br />
                            Agregar a Hoja de Cotización
                          </p>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={ImgMold2}
                        width="300"
                        height="175"
                        alt="No se Encontró la Imágen"
                      />
                    </td>
                    <td>
                      <h4>Producto 3</h4>
                      <p style={{ fontSize: "small" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli
                        Aliquam orci lectus, malesuada nec posuere nec, tempor
                        et lectus. Phasellus nunc nibh, hendrerit id commodo et,
                        vehicula efficitur dui.
                      </p>
                    </td>
                    <td>
                      <a href="#">
                        <div class="agregar">
                          <p>
                            <img
                              src={ImgMold}
                              alt="Nos encontro la imagen"
                              width="71"
                              height="34"
                            />
                            <br />
                            Agregar a Hoja de Cotización
                          </p>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={ImgMold2}
                        width="300"
                        height="175"
                        alt="No se Encontró la Imágen"
                      />
                    </td>
                    <td>
                      <h4>Producto 4</h4>
                      <p style={{ fontSize: "small" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli
                        Aliquam orci lectus, malesuada nec posuere nec, tempor
                        et lectus. Phasellus nunc nibh, hendrerit id commodo et,
                        vehicula efficitur dui.
                      </p>
                    </td>
                    <td>
                      <a href="#">
                        <div class="agregar">
                          <p>
                            <img
                              src={ImgMold}
                              alt="Nos encontro la imagen"
                              width="71"
                              height="34"
                            />
                            <br />
                            Agregar a Hoja de Cotización
                          </p>
                        </div>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div>
          <br />
        </div>
      </main>
    </Page>
  );
};

export default Molderia;

