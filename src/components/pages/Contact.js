import React from "react";
import '../pages/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faEnvelopeOpen, faLocationDot, faMap } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';

function Contact() {


    return (
        <>
            <div className="cuerpo-contactos">
                <div className="content-main">
                    <div className="card">

                        <div className="icon"><FontAwesomeIcon className="material-icons md-36" icon={faPhone} /></div>
                        <p className="title">Teléfono</p>
                        <div className="text">
                            <a className="links" href="https://wa.link/byj1si" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a> &nbsp; &nbsp;
                            <a className="links" href="tel:+584246328415" target="_blank"><FontAwesomeIcon icon={faPhone} />{/*+58 424-6328415*/}</a>
                        </div>

                    </div>
                    <div className="card">

                        <div className="icon"><FontAwesomeIcon className="material-icons md-36" icon={faEnvelope} /></div>
                        <p className="title">Correo Electrónico</p>
                        <a className="text" href="mailto:info@cauchoslamundial.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen} /></a>

                    </div>
                    <div className="card">

                        <div className="icon"><FontAwesomeIcon className="material-icons md-36" icon={faLocationDot} /></div>
                        <p className="title">Ubicación</p>
                        <a className="text" href="https://www.google.com/maps/place/Cauchos+La+Mundial+C.A./@10.585714,-71.630291,16z/data=!4m6!3m5!1s0x8e899772bf5d1d1b:0x1c0c2ab5928ca2b!8m2!3d10.5857137!4d-71.6302907!16s%2Fg%2F11b5qrbd27?hl=en&entry=ttu" target="_blank"><FontAwesomeIcon icon={faMap} /></a>
                    </div>
                </div>
                <br /><br /><br />
            </div>
            <Footer />
        </>
    );
}
export default Contact;