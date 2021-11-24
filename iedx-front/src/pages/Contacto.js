import Page from '../components/Page';
import { Link } from "react-router-dom";
import "../css/contact-styles.css";
import Iframe from 'react-iframe';
import React, { useState, useEffect } from "react";
import useAlert from "../hooks/useAlert";
import useAxios from "../hooks/useAxios";

const Nosotros = props => {
  const { get, post, put } = useAxios();
  const [state, setState] = useState({
    name: "",
    messagereg: "",
    email: "",
    address: "",
    subject: "",
    phone: "",
  });
  const { openAlert } = useAlert();
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setState({ ...state, [name]: value });
    };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ state });
  
    try {
        
        const registry = {
            name: state.name,
            email: state.email,
            address: state.address,
            phone: state.phone,
            messagereg: state.messagereg,
            subject: state.subject

        };

      console.log({registry});
      let response;
      response = await post("registry", registry);
      await openAlert("Se han enviado datos de contacto");
      console.log({ response });
    } catch (error) {
      await openAlert("Surgió un problema al solicitar contacto");
      console.log({ error });
    }
  };
  return (
    <Page title="Nosotros - IEDX México">
      <main className="main contact">
      <div className="container contact">
        <div className="leftSection">
          <h1>CONTACTANOS!</h1>
          <p style={{textAlign: 'left'}}>
            Coyoacan 1622, Col. Del Valle, Benito Juárez, Ciudad de México, CP
            03100
          </p>
          <Link to="/">sales.mx@iedx.com.mx</Link>
          <p>55 6425 4434</p>
          <div className="map">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0832307066717!2d-99.17456638509438!3d19.365548486922435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff941809ef65%3A0x487b0fe9efee08a!2sAv.%20Coyoac%C3%A1n%201622%2C%20Col%20del%20Valle%20Sur%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1632379667080!5m2!1ses-419!2smx" 
                width="100%" height="200" style={{border:'0'}} 
                allowfullscreen="" loading="lazy"/>
          </div>
        </div>
        <div className="rightSection">
          <form onSubmit={handleSubmit}  autocomplete="on">
            <div className="form-row">
              <div class="form-input">
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange}/>
              </div>
              <div className="form-input">
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange}/>
              </div>
            </div>
            <div className="form-row">
              <div class="form-input">
                <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange}/>
              </div>
              <div className="form-input">
                <input type="text" name="address" placeholder="Dirección" onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input">
                <input type="text" name="subject" placeholder="Asunto" onChange={handleChange} />
              </div>
            </div>
            <div class="form-row">
              <div class="form-input">
                <textarea name="messagereg" rows="10" placeholder="Mensaje..." onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="form-row">
              <button className="send-form-btn">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </Page>
  )
}

export default Nosotros
