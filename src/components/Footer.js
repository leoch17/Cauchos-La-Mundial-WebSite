import React from "react";
import '../components/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Divider } from "@chakra-ui/react";

function Footer() {

    return (
        <>
            <Divider className="divisor-footer" />
            <div className="footer_1">
                <div className="container">
                    <div className="row ">
                        <br /><br />
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h4 className="final-words">Horario de Atención:</h4>
                            <p className="final-words">
                                Lunes – Viernes, 8:00 a.m. – 6:00 p.m.
                            </p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>


                <center>
                    <div className="row">
                        {/* <div className="footer-horario">
                            <a href='https://www.cauchoslamundial.com/' target='_blank' className='social-logo'><img src="images/clm.png" width={300} /></a>
                        </div> */}
                    </div>
                </center>
                <br />


                <div className="container">
                    <div className="row ">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <aside className="widget social_widget">
                                <div className="links-options-footer">

                                    <a className="icon-social" href="https://www.instagram.com/cauchoslamundial.ve/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a className="icon-social" href="https://www.facebook.com/p/Cauchos-La-Mundial-100083320903547/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a className="icon-social" href="https://www.youtube.com/@cauchoslamundial" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>

                            </aside>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div >
                <center>
                    <img className="footer-logo" src="/images/clm.webp" />
                </center>

                <br />

                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="copyright">
                            <a className="enlace" href="/" target="_blank">CAUCHOS LA MUNDIAL</a> © Todos los derechos reservados. Diseñado por Grupo La Mundial C.A.
                        </div><br />
                    </div>
                </div>
            </div >

        </>
    );
}

export default Footer;