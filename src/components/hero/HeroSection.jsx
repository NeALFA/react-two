import React, { Component } from "react";
import Slider from "react-slick";

import "./HeroUI.scss";

export class HeroSection extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slick-carousel">
        <img className="bg-img" src="/bg1.png" alt="" />
        <div className="container">
          <Slider {...settings}>
            <div className="carousel-item">
              <h3>LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
            <div className="carousel-item">
              <h3>LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
            <div className="carousel-item">
              <h3>LEANGROUP - тубы и этикетки</h3>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default HeroSection;
