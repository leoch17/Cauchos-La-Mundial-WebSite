import React from "react";
import '../sections/DescriptionSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faHeadset, faClock, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Divider } from "@chakra-ui/react";



import 'bootstrap/dist/css/bootstrap.min.css';



function DescriptionSection() {

    return (
        <>
            <Divider className="divisor-desc" />
            <div className="description">
                <div className="row">
                    <div className="col-lg-3 icono-deatil" id="icon-first">
                        <center>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '50px' }} />
                            <p className="title">30 años de experiencia</p>
                            {/* <p className="sub-title">
                            Experienced staff and professionally trained chauffeurs
                        </p> */}
                        </center>
                    </div>
                    <div className="col-lg-3 icono-deatil" id="icon-second">
                        <center>
                            <FontAwesomeIcon icon={faClock} style={{ fontSize: '50px', color: "#ececec" }} />
                            <p className="title" style={{ color: "#fff" }}>Despacho 72 horas</p>
                            {/* <p className="sub-title">
                            We can offer you the right vehicle at the right price to fit your
                            budget
                        </p> */}
                        </center>
                    </div>
                    <div className="col-lg-3 icono-deatil" id="icon-third">
                        <center>
                            <FontAwesomeIcon icon={faBusAlt} style={{ fontSize: '50px' }} />
                            <p className="title">Red de distribución nacional</p>
                            {/* <p className="sub-title">
                            We offer an extensive fleet of vehicles including sedans, limousines
                            and coach buses
                        </p> */}
                        </center>
                    </div>
                    <div className="col-lg-3 icono-deatil" id="icon-fourty">
                        <center>
                            <FontAwesomeIcon icon={faHeadset} style={{ fontSize: '50px', color: "#ececec" }} />
                            <p className="title" style={{ color: "#fff" }}>Soporte técnico especializado</p>
                            {/* <p className="sub-title">
                            We provide our transportation services nationwide
                        </p> */}
                        </center>
                    </div>
                </div>
            </div>
            {/* <Divider className="divisor-desc" />
            <Divider className="divisor-desc" /> */}
        </>
    );
}

export default DescriptionSection;