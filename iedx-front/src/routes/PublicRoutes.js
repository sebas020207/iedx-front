import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Nosotros from '../pages/Nosotros';
import Socios from '../pages/Socios';
import Productos from '../pages/Productos';
import Cotizaciones from '../pages/Cotizaciones';
import Contacto from '../pages/Contacto';
import MaquinariaYRefacciones from '../pages/MaquinariaYRefacciones';
import ManejoDeEnvases from '../pages/ManejoDeEnvases';
import Lubricantes from '../pages/Lubricantes';
import CotizacionesMyR from '../pages/CotizacionesMyR';
import CotizacionesMdE from '../pages/CotizacionesMdE';
import Catalogo from '../pages/Catalogo';
import HojadeCotizacion from '../pages/HojadeCotizacion';


const PublicRoutes = (props) => {
  return (
    <>
      <Route path="/nosotros" exact component={Nosotros} />
      <Route path="/productos" exact component={Productos} />
      <Route path="/cotizaciones" exact component={Cotizaciones} />
      <Route path="/maquinaria_y_refacciones" exact component={MaquinariaYRefacciones} />
      <Route path="/manejo_de_envases" exact component={ManejoDeEnvases} />
      <Route path="/lubricantes" exact component={Lubricantes} />
      <Route path="/cotizaciones/Maquinaria y refacciones" exact component={CotizacionesMyR} />
      <Route path="/cotizaciones/Manejo" exact component={CotizacionesMdE} />
      <Route path="/cotizaciones/:namecat/:namesubcat/:idsubcat" exact component={Catalogo} />
      <Route path="/cotizaciones/:namecat/:namesubcat/:idsubcat/hojadecotizacion" exact component={HojadeCotizacion} />
      <Route path="/contacto" exact component={Contacto} />
      <Route path="/socios" exact component={Socios} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
    </>
  );
};

export default PublicRoutes;
