import React, { Component } from "react";
import Slider from "react-slick";

import "./TeamUI.scss";

export class TeamSection extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <section id="comand">
        <div className="team__container container">
          <h2>
            Наша <span>команда</span>
          </h2>
          <div className="team__container--footer">
            <Slider {...settings}>
              <div>
                <img src="/person1.png" alt="" />
              </div>
              <div>
                <img src="/person2.png" alt="" />
              </div>
              <div>
                <img src="/person3.png" alt="" />
              </div>
              <div>
                <img src="/person4.png" alt="" />
              </div>
              <div>
                <img src="/person5.png" alt="" />
              </div>
              <div>
                <img src="/person2.png" alt="" />
              </div>
            </Slider>
            <div>
              <button>Наша команда</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamSection;
