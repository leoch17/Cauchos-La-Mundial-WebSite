import React from "react";
import '../Commerces/ccs commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_guarico() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución de Guárico</h2>
                            <br /><br />
                            <br /><br />
                            <br /><br />
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">NEXTREM, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/nextremca/" target="_blank">@nextremca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121300239" target="_blank"> +58 412-1300239</a><br />
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
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">HIPERCAUCHOS VENEZUELA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/hipercauchos/" target="_blank">@hipercauchos</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584120342177" target="_blank"> +58 412-0342177</a><br />
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
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.1931643976493!2d-67.35925279821701!3d9.90174622272959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aa92a8b8bb86f%3A0x7b3e2d7364489736!2sHipercauchos%20Venezuela%20C.A!5e0!3m2!1sen!2sve!4v1691683638624!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">GRAN CAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/grancaucho/" target="_blank">@Grancaucho</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584127796316" target="_blank"> +58 412-7796316</a><br />
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
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.899174272314!2d-67.45063282149582!3d8.8983312489063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7f61cf83ce5f57%3A0x38a46642173be6db!2sGran%20Caucho!5e0!3m2!1sen!2sve!4v1691683878891!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">DOCTOR BATERIA 2011, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584143351436" target="_blank"> +58 414-3351436</a><br />
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
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item> */}
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">AUTO K, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584128348880" target="_blank"> +58 412-8348880</a><br />
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
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item> */}
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
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

export default Comercio_guarico;