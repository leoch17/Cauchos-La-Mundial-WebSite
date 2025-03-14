import React from "react";
import '../Commerces/ccs commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_falcon() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución de Falcón</h2>
                            <br /><br />
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">BARRAKI MOTORS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE MAPARARI, LOCAL #13, SECTOR BOBARE, SANTA ANA DE CORO, FALCÓN <br />
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146852163" target="_blank"> +58 414-6852163</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">R.R. RADIALES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE COMERCIO DE CAJA AGUA, LOCAL S/N, PUNTO FIJO <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/radiales2022/" target="_blank">@radiales2022</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246641017" target="_blank"> +58 424-6641017</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">TODO RUEDAS CORO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. TIRSO SALAVERRIA, CON AV. EL TENIS Y CALLE JABONERIA, LOCAL TODO RUEDAS CORO FRENTE AL DEPOSITO DE LA PEPSI <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/todoruedascoro/" target="_blank">@todoruedascoro</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146898931" target="_blank"> +58 414-6898931</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">RUEDAS PENÍNSULA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. RAFAEL GONZALEZ, ENTRE CALLE MONAGAS Y TALAVERA, LOCAL S/N, SECTOR PUNTO FIJO <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaspeninsula/" target="_blank">@ruedaspeninsula</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246556775" target="_blank"> +58 424-6556775</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">EUROPOSTA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> ESTACIÓN DE SERVICIO LA POPULAR <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/grancaucho/" target="_blank">@europosta</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246330587" target="_blank"> +58 424-6330587</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">TECNO CAUCHOS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE LIBERTAD, FRENTE A FERREMACO, LOCAL S/N CORO ESTADO FALCÓN <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tecno_caucho/" target="_blank">@tecno_caucho</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584242815419" target="_blank"> +58 424-2815419</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">EL MUNDO DEL CAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE MARIÑO, CON AV. MONAGAS, LOCAL S/N PUNTO FIJO FALCÓN <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/elmundodelcaucho/" target="_blank">@elmundodelcaucho</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146102293" target="_blank"> +58 414-6102293</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">CAUCHOS LOS OLIVARES, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. OLLARVIDES, C.C. BUENOS AIRES, SECTOR PUERTA MARAVEN, EDIF. FIRESTONE, PUNTA CARDÓN <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cauchos_losolivares/" target="_blank">@Cauchos_losolivares</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+5841469462463" target="_blank"> +58 414-6946246</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">HILDOCAUCHO DE HILDOMAR BRACHO F.P, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. TIRSO ZALAVERRIA AL FRENTE DE EDIF. DON SILVERIO ENTRE CALLE EL SOL Y CALLE LIBERTAD LOCAL #3 <br />
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126897288" target="_blank"> +58 412-6897288</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">SUPER CAUCHO PF II, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE AYACUCHO CON CALLE ESQUINA NAZATET, LOCAL S/N, PUNTO FIJO <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/supercauchopf/" target="_blank">@supercauchopf</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246330587" target="_blank"> +58 424-6330587</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header">ESCAPE LA PUERTA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. OLLARVIDES, CON CALLE TROMPILLO, LOCAL S/N, SECTOR PUERTA MARAVEN <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/escapelapuerta_c.a/" target="_blank">@escapelapuerta_ca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584246042056" target="_blank"> +58 424-6042056</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br /><br />
                        </div>
                    </center>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default Comercio_falcon;