import React, { useState, useEffect } from "react";
import "../pages/Markv2.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function Markv2() {
    const handleClick = () => {
        alertify.alert(
            "Cauchos La Mundial",
            "Actualmente este sitio se encuentra en construcción",
            function () {
                alertify.message("OK");
            }
        );
    };

    useEffect(() => {
        const handleImageLoad = () => {
            const spinner = document.querySelector('.spinner');
            if (spinner) {
                spinner.style.display = 'none';
            }
        };

        const handleMouseEnter = (event) => {
            const slide = event.currentTarget;
            const title = slide.querySelector('.flex-title');
            const about = slide.querySelector('.flex-about');

            if (title) {
                title.style.transform = 'rotate(0deg)';
                title.style.top = '10%';
            }

            if (about) {
                about.style.opacity = '1';
            }
        };

        const handleMouseLeave = (event) => {
            const slide = event.currentTarget;
            const title = slide.querySelector('.flex-title');
            const about = slide.querySelector('.flex-about');

            if (title) {
                title.style.transform = 'rotate(90deg)';
                title.style.top = '15%';
            }

            if (about) {
                about.style.opacity = '0';
            }
        };

        const flexSlides = document.querySelectorAll('.flex-slide');
        const flexContainer = document.querySelector('.flex-container');

        if (flexContainer) {
            flexContainer.addEventListener('load', handleImageLoad);
        }

        flexSlides.forEach((slide) => {
            slide.addEventListener('mouseenter', handleMouseEnter);
            slide.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            // Clean up event listeners when the component unmounts
            if (flexContainer) {
                flexContainer.removeEventListener('load', handleImageLoad);
            }

            flexSlides.forEach((slide) => {
                slide.removeEventListener('mouseenter', handleMouseEnter);
                slide.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const [showModalHankook, setShowModalHankook] = useState(false);
    const [showModalDunlop, setShowModalDunlop] = useState(false);
    const [showModalNankang, setShowModalNankang] = useState(false);
    const [showModalChengshan, setShowModalChengshan] = useState(false);
    const [showModalPrinx, setShowModalPrinx] = useState(false);
    const [showModalYokohama, setShowModalYokohama] = useState(false);
    const [showModalCorghi, setShowModalCorghi] = useState(false);
    const [showModalWeathertech, setShowModalWeathertech] = useState(false);




    const handleCloseModalHankook = () => {
        setShowModalHankook(false);
    };

    const handleCloseModalDunlop = () => {
        setShowModalDunlop(false);
    };

    const handleCloseModalNankang = () => {
        setShowModalNankang(false);
    };

    const handleCloseModalChengshan = () => {
        setShowModalChengshan(false);
    };

    const handleCloseModalPrinx = () => {
        setShowModalPrinx(false);
    };

    const handleCloseModalYokohama = () => {
        setShowModalYokohama(false);
    };

    const handleCloseModalCorghi = () => {
        setShowModalCorghi(false);
    };

    const handleCloseModalWeathertech = () => {
        setShowModalWeathertech(false);
    };





    return (
        <>
            <body className="body-marcas">
                <div class="flex-container">

                    {/* Hankook */}
                    <div class="flex-slide hankook">
                        <div class="flex-title flex-title-home"><img src="images/marcas/hankook.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#EB6707", borderColor: "#EB6707" }} onClick={() => setShowModalHankook(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalHankook} onHide={handleCloseModalHankook} centered>
                                <Modal.Header style={{ backgroundColor: "#EB6707" }} closeButton>
                                    <Modal.Title style={{ color: "#fff" }} className="title-hankook">Hankook</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-hankook.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-hankook" target="_blank" href="https://hankook.com.ve/">
                                        <Button style={{ backgroundColor: "#EB6707", borderColor: "#EB6707", color: "#fff" }}>
                                            Ir a Hankook Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Dunlop */}
                    <div class="flex-slide dunlop">
                        <div class="flex-title flex-title-home"><img src="images/marcas/dunlop.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#000", borderColor: "#000" }} onClick={() => setShowModalDunlop(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalDunlop} onHide={handleCloseModalDunlop} centered>
                                <Modal.Header style={{ backgroundColor: "#FFDE00" }} closeButton>
                                    <Modal.Title className="title-hankook">Dunlop</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-dunlop.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-dunlop" target="_blank" href="https://dunlop.com.ve/">
                                        <Button style={{ backgroundColor: "#FFDE00", borderColor: "#FFDE00", color: "#000" }}>
                                            Ir a Dunlop Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Nankang */}
                    <div class="flex-slide nankang">
                        <div class="flex-title flex-title-home"> <img src="images/marcas/nankang.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#E2050B", borderColor: "#E2050B" }} onClick={() => setShowModalNankang(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalNankang} onHide={handleCloseModalNankang} centered>
                                <Modal.Header style={{ backgroundColor: "#E4050C" }} closeButton>
                                    <Modal.Title style={{ color: "#000" }} className="title-hankook">Nankang</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-nankang.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-nankang" target="_blank" href="https://nankang.com.ve/">
                                        <Button style={{ backgroundColor: "#E4050C", borderColor: "#E4050C", color: "#000" }}>
                                            Ir a Nankang Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Chengshan */}
                    <div class="flex-slide chengshan">
                        <div class="flex-title flex-title-home"><img src="images/marcas/chengshan.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#fff", borderColor: "#fff", color: "#EE1C25" }} onClick={() => setShowModalChengshan(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalChengshan} onHide={handleCloseModalChengshan} centered>
                                <Modal.Header style={{ backgroundColor: "#EE1C25" }} closeButton>
                                    <Modal.Title style={{ color: "#fff" }} className="title-hankook">Chengshan</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-chengshan.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-chengshan" target="_blank" href="https://chengshan.com.ve/">
                                        <Button style={{ backgroundColor: "#EE1C25", borderColor: "#EE1C25", color: "#fff" }}>
                                            Ir a Chengshan Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Prinx */}
                    <div class="flex-slide prinx">
                        <div class="flex-title flex-title-home"><img src="images/marcas/prinx.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#fff", borderColor: "#fff", color: "#65DA00" }} onClick={() => setShowModalPrinx(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalPrinx} onHide={handleCloseModalPrinx} centered>
                                <Modal.Header style={{ backgroundColor: "#65DA00" }} closeButton>
                                    <Modal.Title style={{ color: "#fff" }} className="title-hankook">Prinx</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-prinx.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-prinx" target="_blank" href="https://prinx.com.ve/">
                                        <Button style={{ backgroundColor: "#65DA00", borderColor: "#65DA00", color: "#fff" }} onClick={handleCloseModalPrinx}>
                                            Ir a Prinx Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Yokohama */}
                    <div class="flex-slide yokohama">
                        <div class="flex-title flex-title-home"><img src="images/marcas/yokohama.gif" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#DF0615", borderColor: "#DF0615", color: "#ffffff" }} onClick={() => setShowModalYokohama(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalYokohama} onHide={handleCloseModalYokohama} centered>
                                <Modal.Header style={{ backgroundColor: "#DF0615" }} closeButton>
                                    <Modal.Title style={{ color: "#000000" }} className="title-hankook">Yokohama</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-westlake.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-yokohama" target="_blank" href="https://yokohama.com.ve/">
                                        <Button style={{ backgroundColor: "#DF0615", borderColor: "#DF0615", color: "#000000" }} onClick={handleCloseModalYokohama}>
                                            Ir a Yokohama Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Corghi */}
                    <div class="flex-slide corghi">
                        <div class="flex-title flex-title-home"><img src="images/marcas/corghi.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#FFED08", borderColor: "#FFED08", color: "#E4031E" }} onClick={() => setShowModalCorghi(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalCorghi} onHide={handleCloseModalCorghi} centered>
                                <Modal.Header style={{ backgroundColor: "#E4031E" }} closeButton>
                                    <Modal.Title style={{ color: "#FFED07" }} className="title-hankook">Corghi</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-corghi.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-corghi" target="_blank" href="https://corghi.com.ve/">
                                        <Button style={{ backgroundColor: "#E4031E", borderColor: "#E4031E", color: "#FFED07" }}>
                                            Ir a Corghi Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    {/* Weathertech */}
                    <div class="flex-slide weathertech">
                        <div class="flex-title flex-title-home"><img src="images/marcas/weathertech.webp" className="marcas" /></div>
                        <div class="flex-about flex-about-home">
                            <Button style={{ backgroundColor: "#000", borderColor: "#000" }} onClick={() => setShowModalWeathertech(true)}>
                                Leer Más
                            </Button>

                            <Modal size="xl" show={showModalWeathertech} onHide={handleCloseModalWeathertech} centered>
                                <Modal.Header style={{ backgroundColor: "#fff" }} closeButton>
                                    <Modal.Title style={{ color: "#000" }} className="title-hankook">Weather</Modal.Title><Modal.Title style={{ color: "#CD181F" }} className="title-hankook">tech</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><img src="images/modales/modal-weathertech.webp" /></Modal.Body>
                                <Modal.Footer>
                                    <a className="enlace-weathertech" target="_blank" href="https://weathertech.com.ve/">
                                        <Button style={{ backgroundColor: "#000", borderColor: "#000", color: "#CD181F" }} onClick={handleCloseModalWeathertech}>
                                            Ir a Weathertech Venezuela
                                        </Button>
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Markv2;