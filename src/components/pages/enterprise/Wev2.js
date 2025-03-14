import React from "react";
import '../enterprise/Wev2.css';

function Wev2() {

    return (
        <>

            <section id="timeline">
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/nosotros/valores.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Valores</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "18px" }}>
                            Integridad, entusiasmo, confianza y orgullo.
                            Esta es la esencia de nuestro equipo de trabajo, de la mano con la responsabilidad social y pasión por servir que nos representa.
                            Estos valores nos han permitido marcar el éxito en la industria de comercialización de productos automotrices en Venezuela y ser referencia en Latinoamérica y el mundo.
                        </p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/nosotros/mision.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Misión</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "22px" }}>Comercializar productos automotrices de alta calidad técnica y comercial, centrada en la calidad del servicio.</p>
                    </div>
                </div>

                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/nosotros/vision.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Visión</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "22px" }}>Ser conocidos como organización líder y mejor opción de comercialización en la industria automotriz de Venezuela y américa latina.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg" style={{ backgroundImage: 'url(./images/nosotros/proposito.webp)' }} />
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif" style={{ fontSize: "20px" }}>Propósito</p>
                    </div>
                    <div className="tl-content">
                        <p style={{ fontSize: "22px" }}> Comercializar productos automotrices de alta calidad mundial, agregando Valor a nuestros Clientes y satisfacción al consumidor final.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Wev2;