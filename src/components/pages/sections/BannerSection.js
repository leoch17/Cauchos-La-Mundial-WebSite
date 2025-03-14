import React from "react";
import '../sections/BannerSection.css';
import { Carousel } from "react-bootstrap";
import { Divider } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';


function BannerSection() {

    return (
        <>
            <div className='hero-container'>
                <Carousel className="seccion-video" >
                    <Carousel.Item>
                        <video className="video-home" src="/video/ultrawide.webm" autoPlay loop muted />
                    </Carousel.Item>

                </Carousel>
            </div>
            <Divider className="divisor-desc" />

        </>
    );
}

export default BannerSection;