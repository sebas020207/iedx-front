
import Page from "../components/Page";
import "../css/styles.css";
import "../css/maquinariayrefacciones.css";
import { Link, useHistory } from "react-router-dom";
import ImgMaq from "../imagenes/maquina_paletizado.jpg";
import ImgMaq2 from "../imagenes/templado.jpg";
import ImgMaq3 from "../imagenes/nolderia.jpg";
import useAxios from "../hooks/useAxios";
import React, { useState, useEffect } from "react";

const CotizacionesMyR = (props) => {

 
  const [subcategories1, setcont1] = useState([]);
  const [subcategories2, setcont2] = useState([]);
  const { get } = useAxios();
  useEffect(() => {
      loadCounts1();
      loadCounts2();
      }, []);
  
      
      const loadCounts1 = async () => {
          try{
          const response = await get(`/subcategories?name=Templadores`);
          if(response.data)
            setcont1(response.data[0].id);
          } catch(error){
            console.log('Error');
          }
        }
        const loadCounts2 = async () => {
          try{
          const response = await get(`/subcategories?name=Molderia`);
          if(response.data)
          setcont2(response.data[0].id);
          } catch(error){
            console.log('Error');
          }
        }

  return (
    <Page title="Maquinaria y Refacciones - IEDX México">
      <div class="mainindex men">
        <div class="contenedor">
          <img src={ImgMaq} alt="Imagen Industria Vidriera" width="100%" />
          <div class="centrado">
            <p>MAQUINARIA Y REFACCIONES</p>
            <div>
              <hr width="800" size="2" color="white" />
            </div>
            <p id="maquinaria">
              La integración total del sistema es extremadamente importante en
              la producción de contenedores de alta calidad y alta velocidad.
              MAVSA diseña y produce subsistemas que maximizan el control y la
              regulación general del peso, la forma y la temperatura.
            </p>
          </div>
        </div>
        <div class="contenedor">
          <img src={ImgMaq2} alt="Imagen Industria Vidriera" width="100%" />
          <div class="centrado">
          <Link to={"/cotizaciones/Maquinaria y refacciones/Templadores/"+subcategories1}>
              TEMPLADORES
            </Link>
            </div>
        </div>
        <div class="contenedor">
          <img src={ImgMaq3} alt="Imagen Industria Vidriera" width="100%" />
          <div class="centrado">
            <Link to={"/cotizaciones/Maquinaria y refacciones/Molderia/"+subcategories2}>
              MOLDERIA
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CotizacionesMyR;

