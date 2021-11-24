import Page from "../components/Page";
import "../css/styles.css";
import "../css/catalogo-styles.css";
import { Link } from "react-router-dom";
import ImgMold from "../imagenes/hojacot.jpg";
import { useParams } from "react-router-dom";
import useTable from "../hooks/useTable";
import React, { useState, useEffect } from "react";
import Select from "../components/Select";
import useAxios from "../hooks/useAxios";

const Catalogo = (props) => {
  const { namecat } = useParams();
  const { namesubcat } = useParams();
  const { idsubcat } = useParams();
  const { reset, elements, addExtraParams, extraParams } = useTable({
    endpoint: `/products?subcategory_id=${idsubcat}`,
  });
  const [provider1, setcont1] = useState([]);
  const [provider2, setcont2] = useState([]);
  const { get } = useAxios();

  useEffect(() => {
    loadCounts1();
    loadCounts2();
  }, []);

  const loadCounts1 = async () => {
    try {
      const response = await get(`/suppliers?name=MAQUINAS DEL VIDRIO S.A`);
      if (response.data) setcont1(response.data[0].id);
    } catch (error) {
      console.log("Error");
    }
  };

  const loadCounts2 = async () => {
    try {
      const response = await get(`/suppliers?name=MenE`);
      if (response.data) setcont2(response.data[0].id);
    } catch (error) {
      console.log("Error");
    }
  };

  const handdleAddproduct = (elemento) => {
    let productslocalstorage = localStorage.getItem("products");
    let products = productslocalstorage
      ? JSON.parse(productslocalstorage)
      : null;
    if (products) {
      if (products.indexOf(elemento.id) === -1) {
        products.push(elemento);
      }
    } else {
      products = [elemento];
    }
    window.location.reload(true);
    localStorage.setItem("products", JSON.stringify(products));
  };

  function getsizearraylocalstorage() {
    try {
      let productslocalstorage = localStorage.getItem("products");
      let products = productslocalstorage
        ? JSON.parse(productslocalstorage)
        : null;
      return products.length;
    } catch (error) {
      console.log("Aun no hay productos agregados");
    }
  }

  const onChangeCheckbox = (event) => {
    if (event.target.checked) {
      addExtraParams({ supplier_id: event.target.value });
    } else {
      reset();
    }
  };

  return (
    <Page title="Molderia - IEDX México">
      <main class="main catalogo">
        <div id="between">
          <br />
        </div>
        <div id="hoja-cat">
          <h4>
            <img
              src={ImgMold}
              alt="Nos encontro la imagen"
              width="41"
              height="24"
            />
            <Link
              to={
                "/cotizaciones/" +
                namecat +
                "/" +
                namesubcat +
                "/" +
                idsubcat +
                "/hojadecotizacion"
              }
            >
              Hoja de Cotización({getsizearraylocalstorage()})
            </Link>
          </h4>
        </div>

        <div id="ubicacion">
          <h4>
            <span>Usted se encuentra en:</span>{" "}
            <Link to="/cotizaciones">Cotizaciones</Link> {">"}{" "}
            <Link to={"/cotizaciones/" + namecat}>{namecat}</Link> {">"}{" "}
            <Link
              to={
                "/cotizaciones/" + namecat + "/" + namesubcat + "/" + idsubcat
              }
            >
              {namesubcat}
            </Link>
          </h4>
        </div>
        <div class="barra1">
          {" "}
          <hr width="%100" size="3" color="#616161" />
        </div>

        <section id="pantalla-dividida">
          <div class="Filtros">
            <div id="molderia">
              <h1>{namesubcat}</h1>
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
                <input
                  type="checkbox"
                  name="empresa[]"
                  id="MAVSA"
                  value={provider1}
                  onChange={(event) => onChangeCheckbox(event)}
                />
                MAVSA
                <br />
                <input
                  type="checkbox"
                  name="empresa[]"
                  id="MenE"
                  value={provider2}
                  onChange={(event) => onChangeCheckbox(event)}
                />{" "}
                MenE
              </div>
              <div></div>
            </div>
          </div>
          <div class="Tabla">
            <div class="orden">
              <label for="orden">Ordenar por:</label>
              <Select
                name="orden"
                id="orden"
                value={extraParams.order_by || "a_z"}
                options={[
                  { value: "a_z", label: "A-Z" },
                  { value: "z_a", label: "Z-A" },
                ]}
                onChange={(event) =>
                  addExtraParams({ order_by: event.target.value })
                }
              />
            </div>
            <div class="contenidoDeTabla">
              <table style={{ width: "100%", height: "100%" }}>
                <thead style={{ boxShadow: "4px 5px 4px rgba(0,0,0,0.2)" }}>
                  <tr>
                    <th id="titulotabla" colspan="3">
                      <h2 style={{ textAlign: "left", paddingLeft: "10%" }}>
                        Productos
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {elements.map((elemento, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={
                            "http://localhost:8000/admin/product/images/" +
                            elemento.id
                          }
                          width="300"
                          height="175"
                          alt="No se Encontró la Imágen"
                        />
                      </td>
                      <td>
                        <h4>{elemento.name}</h4>
                        <p style={{ fontSize: "small" }}>
                          {elemento.description}
                        </p>
                      </td>
                      <td>
                        <button
                          style={{ color: "black", background: "white" }}
                          onClick={() => handdleAddproduct(elemento)}
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
                  ))}
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

export default Catalogo;

