import React from "react";
import '../Commerces/ccs commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_trujillo() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución de Trujillo</h2>
                            <br /><br />
                            <br /><br />
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">CAUCHOS MAYA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 8 CON CALLE MAYA , PALTA 1, MUNICIPIO VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cauchosmaya1/" target="_blank">@cauchosmaya1</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147359948" target="_blank"> +58 414-7359948</a><br />
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
                                        {/* <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.773569537728!2d-68.743274149543!3d10.324558860325132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e80c8c885cc7e39%3A0x83dd100b49246a27!2sAGRO%20RUEDAS%20SF%20CA!5e0!3m2!1ses!2sve!4v1691530525228!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div> */}
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">INVERSIONES TODO CAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CARRETERA NACIONAL, SECTOR SEGUNDA SABANA, DIAGONAL A LA ENTRADA DE LA URB EL RINCÓN 2, MUNICIPIO BOCONO ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/todocauchobcno/" target="_blank">@todocauchobcno</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584140362985" target="_blank"> +58 414-0362985</a><br />
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
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.920413850292!2d-70.23904828355037!3d9.25851522903892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7cd9f8511eb9ab%3A0x7c159199df97e18d!2sInversiones%20Todo%20Caucho%20C.A!5e0!3m2!1sen!2sve!4v1691584836131!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">NEUMÁTICOS VALERA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AVENIDA 10 ENTRE CALLES 4 Y 5, C.C. VICTOR HUGO, MUNICIPIO VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/neumavalca/" target="_blank">@neumavalca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147098558" target="_blank"> +58 414-7098558</a><br />
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
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">INVERSIONES SOBRE RUEDAS VALERA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AVENIDA BOLIVARIANA CON CRUCE DE CALLE 18 VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/supertiresvalera/" target="_blank">@supertiresvalera</a> <br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/superkauchosgilsa/" target="_blank">@superkauchosgilsa</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147299673" target="_blank"> +58 414-7299673</a><br />
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
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">NEUMÁTICOS Y SERVICIOS ANDRADE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CARRETERA NACIONAL SECTOR LA MILLA A 100 MTS DEL PUENTE DE LA MILLA.<br></br>
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584247620421" target="_blank"> +58 424-7620421</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
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
                                        </Carousel>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">TECNI CAUCHOS VALERA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 8 CON CALLE MAYA, GALPONES G. B INCA, SECTOR PLATA I, A UNA CUADRA DEL TERMINAL DE PASAJEROS, VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tecnicauchosvalera/" target="_blank">@tecnicauchosvalera</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147339142" target="_blank"> +58 414-7339142</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item> */}
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
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.997290875548!2d-70.59836448753813!3d9.318490965765584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6328680265ae67%3A0x6f44918b862c0134!2sTecni%20Cauchos%20Valera%20CA!5e0!3m2!1sen!2sve!4v1691586153536!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br /><br />
                            <br /><br />
                        </div>
                    </center>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default Comercio_trujillo;