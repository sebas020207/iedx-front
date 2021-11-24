import React from 'react'
import Page from '../components/Page';
import mapline from '../imagenes/map-line.png';
import MAVSA from '../imagenes/MAVSA.png';
import MenE from '../imagenes/MenE.png';
import logocircle from '../imagenes/EDX logo circle.png';
import "../css/partners-styles.css";
import { Link } from "react-router-dom";

const Socios = props => {
  return (
    <Page title="Socios - IEDX México">
        <main className="main">
        <div className="map-container">
            <div className="display-flexible position-relative">
                <img src={mapline} alt="Mapa del mundo trazado en contorno" className="map-line"/>
                <Link href="index.html">
                    <img src={logocircle} alt="Logotipo miniatura de EDX" className="mini-edx mini-logo"/>
                </Link>
                <Link href="#">
                    <img src={MAVSA} alt="Logotipo miniatura de MAVSA" className="mini-mavsa mini-logo"/>
                </Link>
                <Link href="#">
                    <img src={MenE} alt="Logotipo miniatura de MenE" className="mini-mene mini-logo"/>
                </Link>
            </div>
        </div>
        <div className="partners display-flexible">
            <div>
                <div className="partners-container title-container">
                    <h1>Socios Internacionales</h1>
                </div>
                <div className="partners-container mavsa-container">
                    <Link href="#">
                        <img src={MAVSA} alt="Logotipo de MAVSA" className="img-container"/>
                    </Link>
                    <div className="info-mavsa">
                        <h2>MAVSA</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis quaerat blanditiis, laudantium culpa, quod nihil eligendi libero error doloremque sit exercitationem temporibus? Repellendus voluptas omnis praesentium suscipit amet explicabo.</p>
                    </div>
                </div>
                <div className="partners-container mene-container">
                    <Link href="#">
                        <img src={MenE} alt="Logotipo de MenE" className="img-container"/>
                    </Link>
                    <div className="info-mene">
                        <h2>MenE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa placeat nemo iste sint expedita? Sequi eum iusto quae beatae amet, qui quidem similique doloremque dolore, quia doloribus fugit excepturi.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </Page>
  )
}

export default Socios
