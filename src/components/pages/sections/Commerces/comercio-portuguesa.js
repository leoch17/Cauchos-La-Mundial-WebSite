import React from "react";
import '../Commerces/ccs commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_portuguesa() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución de Portuguesa</h2>
                            <br /><br />
                            <br /><br />
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">AMERICAN CAUCHOS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145544700" target="_blank"> +58 414-5544700</a><br />
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
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.6976933911812!2d-69.2033709283566!3d9.562613145695376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7dc182a3e54ebb%3A0x92be084c07757d67!2sDIMA%20American%20Cauchos%20C.A.!5e0!3m2!1sen!2sve!4v1691613610142!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">MAKRO RUEDAS LOS PIONEROS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/makroruedaslospioneros/" target="_blank">@makroruedaslospioneros</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121500254" target="_blank"> +58 412-1500254</a><br />
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
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item> */}
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.7870968843142!2d-69.22960813768138!3d9.536582996934547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7dc1ce1dbdc38d%3A0xea5887828cf2caa5!2sMakro%20Ruedas%20Los%20Pioneros!5e0!3m2!1ses-419!2sve!4v1691613765793!5m2!1ses-419!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">IMPORTADORA Y SUMINISTROS ACARIGUA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/agrocauchosacarigua/" target="_blank">@agrocauchosacarigua</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584120580345" target="_blank"> +58 412-0580345</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.2110490904224!2d-69.18645708406143!3d9.558834038185294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7dc3d4820a5967%3A0x37b39adc2f60a64b!2sAgrocauchos%20Acarigua!5e0!3m2!1sen!2sve!4v1691614454309!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">TU CAUCHO GUANARE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tucauchoguanare/" target="_blank">@tucauchoguanare</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584145758389" target="_blank"> +58 414-5758389</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item> */}
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
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d828.3642555226733!2d-69.73795028936057!3d9.028447027654366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnNDIuNSJOIDY5wrA0NCcxNS4xIlc!5e0!3m2!1ses!2sve!4v1691614597878!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">CENTRO DE SERVICIOS RMS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584245056734" target="_blank"> +58 424-5056734</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item> */}
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
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1169.7845103108546!2d-69.23003368622072!3d9.53733707581503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzInMTQuNCJOIDY5wrAxMyc0Ny4zIlc!5e0!3m2!1ses!2sve!4v1691614760057!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br /><br />
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

export default Comercio_portuguesa;