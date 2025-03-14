import React from "react";
import '../Commerces/ccs commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_sucre() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución de Sucre</h2>
                            <br /><br />
                            <br /><br />
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">EL REY DEL CAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147932962" target="_blank"> +58 414-7932962</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.webp' loop />
                                            </Carousel.Item> */}
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1165.6748600587139!2d-63.253081834449446!3d10.668962559962647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQwJzA4LjUiTiA2M8KwMTUnMTAuNiJX!5e0!3m2!1ses!2sve!4v1691611822735!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">ACCESORIOS LA BOUTIQUE DEL AUTOMOVIL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/tiendas.boutique/" target="_blank">@tiendas.boutique</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584149849560" target="_blank"> +58 414-9849560</a><br />
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
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d980.237599642719!2d-63.255173948147245!3d10.660958152032773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDM5JzM5LjUiTiA2M8KwMTUnMTguMiJX!5e0!3m2!1ses!2sve!4v1691612125425!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">MR KAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/centrokauchocarupano/" target="_blank">@centrokauchocarupano</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121866412" target="_blank"> +58 412-1866412</a><br />
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.4083708368366!2d-63.26499007127097!3d10.671328359512696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c33dde80d99b597%3A0x2ae5dd045f146a58!2sMr.Kaucho!5e0!3m2!1ses!2sve!4v1691612286746!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">TRANSPORTE MAFER 2014, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126058897" target="_blank"> +58 412-6058897</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            {/* <Carousel.Item interval={1000}>
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
                                            <Carousel.Item interval={1000}>
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.060240948483!2d-63.18109152857365!3d10.705888686398097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c33e7a675abfe47%3A0xa14a56b1354fd2a5!2sTransporte%20Mafer%202014%20C.A!5e0!3m2!1sen!2sve!4v1691612509553!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">MULTICAUCHOS SAN MIGUEL, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/multicauchossanmiguel/" target="_blank">@multicauchossanmiguel</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147800620" target="_blank"> +58 414-7800620</a><br />
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1648.6186371218564!2d-63.25715213875969!3d10.649492364600723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDM4JzU3LjkiTiA2M8KwMTUnMjQuNCJX!5e0!3m2!1ses!2sve!4v1691612716945!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">TODO EN RUEDAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/todoenruedas2020/" target="_blank">@todoenruedas2020</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584248815603" target="_blank"> +58 424-8815603</a><br />
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
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.webp' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.webp' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d824.8275511506557!2d-64.18320627827231!3d10.45619619842428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI3JzIxLjkiTiA2NMKwMTAnNTguMyJX!5e0!3m2!1ses!2sve!4v1691612838669!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item> */}
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

export default Comercio_sucre;