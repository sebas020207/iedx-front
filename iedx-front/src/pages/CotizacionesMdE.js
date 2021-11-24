
import Page from "../components/Page";
import React, { useState, useEffect } from "react";
import "../css/styles.css";
import "../css/maquinariayrefacciones.css";
import ImgMaq from "../imagenes/grafito.jpg";
import ImgMaq2 from "../imagenes/grafi.jpg";
import ImgMaq3 from "../imagenes/cadenasilenciosa.jpg";
import ImgMaq4 from "../imagenes/manejosup.jpg";
import { Link, useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const CotizacionesMdE = (props) => {
 
    const [subcategories1, setcont1] = useState([]);
    const [subcategories2, setcont2] = useState([]);
    const [subcategories3, setcont3] = useState([]);
    const { get } = useAxios();
    useEffect(() => {
        loadCounts1();
        loadCounts2();
        loadCounts3();
        }, []);
    
        
        const loadCounts1 = async () => {
            try{
            const response = await get(`/subcategories?name=Grafito`);
            if(response.data)
              setcont1(response.data[0].id);
            } catch(error){
              console.log('Error');
            }
          }
          const loadCounts2 = async () => {
            try{
            const response = await get(`/subcategories?name=Cadena Silenciosa`);
            if(response.data)
            setcont2(response.data[0].id);
            } catch(error){
              console.log('Error');
            }
          }
          const loadCounts3 = async () => {
            try{
            const response = await get(`/subcategories?name=Equipo de manejo`);
            if(response.data)
            setcont3(response.data[0].id);
            } catch(error){
              console.log('Error');
            }
          }

    return(
        <Page title="Manejo de Envases - IEDX México">
            <div class="mainindex men">
                <div class="contenedor">
                    <img src={ImgMaq} alt="Imagen Industria Vidriera" width="100%"/>
                    <div class="centrado"> 
                        <p>MANEJO</p> 
                        <div>
                            <hr width="800" size="2" color="white"/>
                        </div>
                        <p id="maquinaria">Nuestros materiales están fabricados con la más alta tecnología y las mejores materias primas.Además, disponemos de grafito específicamente formulado para satisfacer las necesidades de la industria del vidrio; contamos con diferentes grados según las condiciones de operación y características de los envases que fabrique.
                            Nuestro grafito es grado isotrópico lo que le confiere una estructura y tamaño de partícula homogénea, otorgándole mejores propiedades al material: mayor durabilidad y resistencia a la alta temperatura.</p>
                    </div>
                </div> 
                <div class="contenedor">
                    <img src={ImgMaq2} alt="Imagen Industria Vidriera" width="100%"/>
                    <div class="centrado">
              
                    <Link to={"/cotizaciones/Manejo/Grafito/"+subcategories1}> GRAFITO</Link>
                    </div>
                </div> 
                <div class="contenedor">
                    <img src={ImgMaq3} alt="Imagen Industria Vidriera" width="100%"/>
                    <div class="centrado">
                  
                    <Link to=  {"/cotizaciones/Manejo/Cadena Silenciosa/"+subcategories2}> CADENA SILENCIOSA </Link>
                    </div>
                </div>  
                <div class="contenedor">
                    <img src={ImgMaq4} alt="Imagen Industria Vidriera" width="100%"/>
                    <div class="centrado">
                
                         <Link to={"/cotizaciones/Manejo/Equipo de manejo/"+subcategories3}> EQUIPO DE MANEJO </Link>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default CotizacionesMdE;