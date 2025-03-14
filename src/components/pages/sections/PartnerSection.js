import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "../sections/PartnerSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PatnerSection() {

  useEffect(() => {
    const customerLogos = document.querySelector('.customer-logos');
    if (customerLogos) {
      // Aquí puedes realizar la inicialización de Slick
      // utilizando el elemento customerLogos
      // y las opciones de configuración correspondientes
    }
  }, []);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <>
      {/*./images/ */}

      <div class="divpart slider">
        {/* <section class="customer-logos slider"> */}
        <Slider {...settings}>
          <div class="slide"><img src="../images/cintillo/hankook-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/dunlop-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/nankang-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/chengshan-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/prinx-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/westlake-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/corghi-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/weathertech-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/hankook-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/dunlop-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/nankang-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/chengshan-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/prinx-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/westlake-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/corghi-cintillo.webp" /></div>
          <div class="slide"><img src="../images/cintillo/weathertech-cintillo.webp" /></div>
        </Slider>
        {/* </section> */}
      </div >
    </>
  );
}

export default PatnerSection;
