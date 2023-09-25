import React, { Component } from "react";
import Slider from "react-slick";

import "./CertificatUI.scss";

export class CertificateSection extends Component {
  render() {
    var settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <section id="certificat">
        <div className="sertificat__container container">
          <h2>
            Качество продукции подтверждают <span>сертификаты</span>
          </h2>
          <div className="certificat__container--footer">
            <Slider {...settings}>
              <div>
                <img src="/sertifikat.png" alt="" />
              </div>
              <div>
                <img src="/sertifikat 2.png" alt="" />
              </div>
              <div>
                <img src="/sertifikat 3.png" alt="" />
              </div>
              <div>
                <img src="/sertifikat 4.png" alt="" />
              </div>
              <div>
                <img src="/sertifikat 5.png" alt="" />
              </div>
              <div>
                <img src="/sertifikat.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default CertificateSection;
