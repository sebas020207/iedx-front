
import Page from "../components/Page";
import "../css/styles.css";
import "../css/catalogo-styles.css";
import "../css/hoja-cotizacion.css";
import { Link } from "react-router-dom";
import ImgCot from "../imagenes/envases.jpg";
import ImgCot2 from "../imagenes/hojacot.jpg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAlert from "../hooks/useAlert";
import useAxios from "../hooks/useAxios";

const HojadeCotizacion = (props) => {

    const { namecat } = useParams();
    const { namesubcat } = useParams();
    const { idsubcat } = useParams();
    const { get, post, put } = useAxios();
    const [products, setproducts] = useState([]);
    const productosEnviados = products.map(product => ({ id: product.id }));
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        mobile_phone: "",
        phone: "",
        company: "",
        area: "",
        priority: "",
        product:[ ]
      });
    const { openAlert } = useAlert();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      };
      
 

    useEffect(() => {
        loadCounts1();
        }, []);

  
        const loadCounts1 =  () => {
            let productslocalstorage= localStorage.getItem("products");
            let products = productslocalstorage ? JSON.parse(productslocalstorage): null;
            setproducts(products);
          }
        
             
    const handdleDelproduct = (elemento) => {
        let productslocalstorage= localStorage.getItem("products");
        let products = productslocalstorage ? JSON.parse(productslocalstorage): null;
        if(products){
            if(products.indexOf(elemento.id)===-1){
                products.pop(elemento);
            }
        }else{
            products=[elemento];
        }
        window.location.reload(true);
        localStorage.setItem("products", JSON.stringify(products));

    }
    function getsizearraylocalstorage() {
        let productslocalstorage= localStorage.getItem("products");
        let products = productslocalstorage ? JSON.parse(productslocalstorage): null;
        return products.length;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ state });
      
        try {
            
            const quote = {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                address: state.address,
                mobile_phone: state.mobile_phone,
                phone: state.phone,
                company: state.company,
                area: state.area,
                priority: state.priority,
                product: productosEnviados

            };
 
          console.log({quote});
          let response;
          response = await post("quote", quote);
          await openAlert("Se guardó la información correctamente");
          console.log({ response });
        } catch (error) {
          await openAlert("Surgió un problema al solicitar cotización");
          console.log({ error });
        }
      };




    return(
        <Page title="Hoja de Cotización - IEDX México">
            <main class="main">
                <div id="between"><br/></div>
                <div id="hoja">
                    <div id="adj-bread">          <h4><span>Usted se encuentra en:</span> <Link to="/cotizaciones">Cotizaciones</Link> {">"} <Link to={"/cotizaciones/"+namecat}>{namecat}</Link> {">"} <Link to={"/cotizaciones/"+namecat+"/"+namesubcat+"/"+idsubcat}>{namesubcat} </Link>  {">"} <Link to={"/cotizaciones/"+namecat+"/"+namesubcat+"/"+idsubcat+"/hojadecotizacion"}>Hoja de cotización</Link>   </h4>  </div>
                    <div><h4 style={{fontSize: 'small'}}><img src={ImgCot2} alt="Nos encontro la imagen" width="41" height="24"/><Link to={"/cotizaciones/"+namecat+"/"+namesubcat+"/hojadecotizacion"}>Hoja de Cotización({getsizearraylocalstorage()})</Link></h4></div>
                    </div>
                <div class="barra" > <hr width="%100" size="3" color="#616161"/></div>
            
                <h1>HOJA DE COTIZACIÓN</h1>
                <div class="datos">
                <form onSubmit={handleSubmit}  autocomplete="on">
                    <div class="entrada">
                        <i class="fas fa-male"></i>
                        <input type="text" id="nombre" name="first_name" placeholder="Escribe tu nombre" required="true"  onChange={handleChange}  />
                    </div>
                    <br/> <div class="entrada">
                        <i class="fas fa-male"></i>
                        <input type="text" id="apellido" name="last_name" placeholder="Escribe tus apellidos" required="true"  onChange={handleChange} />
                    </div>
                    <br/> <div class="entrada">
                    <i class="fas fa-building"></i>
                        <input type="tel" id="compania" name="company" placeholder="Compañia" required="true"  onChange={handleChange} />
                    </div>
                    <br/> <div class="entrada">
                        <i class="far fa-envelope"></i>
                        <input type="email" id="email" name="email" placeholder="E-mail" required="true"  onChange={handleChange} />
                    </div>
                    <br/> <div class="entrada">
                        <i class="fas fa-street-view"></i>
                        <input type="direccion_física" id="direccion_física" name="address" placeholder="Direccion física" required="true"  onChange={handleChange} />
                    </div>
                    <br/> <div class="entrada">
                        <i class="fas fa-phone"></i>
                        <input type="tel" id="telefono-fijo" name="phone" placeholder="Telefono fijo" required="false"  onChange={handleChange} />
                    </div>
                    <br/> <div class="entrada">
                        <i class="fas fa-mobile-alt"></i>
                        <input type="tel" id="telefono-movil" name="mobile_phone" placeholder="Telefono movil" required="true"  onChange={handleChange} />
                    </div>
                    <br/> 
                    <div class="entrada">
                        <i class="fas fa-briefcase"></i>
                        <select name="area" id= "area"   onChange={handleChange}>
                            <optgroup label="Área"> 
                                <option value="A">Producción</option>
                                <option value="B">Administración</option>
                                <option value="C">Finanzas</option>
                                </optgroup>
                        </select>
                    </div>
                    <br/> 
                    <div class="entrada">
                    <i class="fas fa-layer-group"></i>
                    <select name="priority" id= "prioridad" class="sel"  onChange={handleChange} >
                        <optgroup label="Prioridad"> 
                            <option value="H">Alta</option>
                            <option value="M">Media</option>
                            <option value="L">Baja</option>
                            </optgroup>
                    </select>
                    </div>
                    <br/>
                    
                    <div class="Tabla">
                
                        <div class="orden">
                     
                        </div>
                        <div class="contenidoDeTabla">
                            <table style={{width: '100%', height: '20%'}}>
                                <thead>
                                    <tr>
                                        <th colspan="3"><h2>RESUMEN</h2></th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                {products.map((elemento, index) => (
                                            <tr key={index}>
                                                <td>
                                                <img src={"http://localhost:8000/admin/product/images/"+ elemento.id} width="300" height="175" alt="No se Encontró la Imágen"/>
                                            </td>
                                            <td>
                                                <h4>{elemento.name}</h4>
                                                <p style={{fontSize: 'small'}}>
                                                {elemento.description}
                                                </p>
                                            </td>
                                            <td>
                                          
                                     
                                                <button style={{color: "black", background: "white"}} onClick={()=>handdleDelproduct(elemento)} >
                                                <div class="agregar">
                                                <p><i class="fas fa-window-close"></i>
                                                    <br/>Quitar de hoja de cotizacion
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

                    <div class="form-inf">
                        <input type="reset" value="Restablecer"/>
                        <input type="submit" value="Enviar"/>
                    </div>
        
                </form>
                </div>
            </main>
        </Page>
    );
};

export default HojadeCotizacion;