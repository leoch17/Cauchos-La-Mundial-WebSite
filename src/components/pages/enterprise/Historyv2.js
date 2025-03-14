import React from "react";
import '../enterprise/Historyv2.css';

function Historyv2() {

    return (
        <>
            <section id="timeline">
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/empresa/empresa.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Orgullosos</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "19px" }}>Fundada el 08 de agosto del año 2005, luego de años de experiencia en Retail y micro distribución, se logró un crecimiento sostenido y el comienzo de relaciones con plantas fabricantes de neumáticos.
                            De esta manera fuimos evolucionando hasta crear una empresa de distribución en el pais.
                        </p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/empresa/empresa-2.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Cauchos</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "20px" }}>Contamos con más de 35 años de experiencia en el ramo de importación de neumáticos y equipos automotrices desde China, Taiwán, Estados Unidos, México, Ecuador, Corea, Japón, Italia y Brasil.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/empresa/empresa-3.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>La</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "19px" }}>Hoy nos enorgullece representar de forma exclusiva de marcas internacionales: HANKOOK, DUNLOP, NANKANG, CHENGSHAN, PRINX, WESTLAKE en el mercado de comercialización de neumáticos, asi como WEATHERTECH Y CORGHI en productos automotrices de alta gama internacional.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/empresa/empresa-4.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Mundial</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "19px" }}> Este crecimiento nos ha permitido expandir nuestra experiencia y formar parte de un Holding de empresas con reconocimiento Internacional como Grupo La Mundial, que está comprendido por Ruedas la Mundial, Baterias La Mundial, Lubricantes La Mundial y Equipamiento La Mundial.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Historyv2;