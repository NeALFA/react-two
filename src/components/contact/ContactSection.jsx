import React, { Component } from "react";
import "./ContactUI.scss";

export class ContactSection extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact__container container">
          <h2>
            Получить подробную <span>информацию</span>
          </h2>
          <p>
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </p>
          <div className="contact__container--input">
            <div className="input-name">
              <label htmlFor="nameInput">
                <img src="/input-icon1.svg" alt="icon" />
              </label>
              <input
                type="text"
                name=""
                id="nameInput"
                placeholder="Ваше имя"
              />
            </div>
            <div className="input-number">
              <label htmlFor="numberInput">
                <img src="/input-icon2.svg" alt="icon" />
              </label>
              <input
                type="text"
                name=""
                id="numberInput"
                placeholder="+375 (29) 0000000"
              />
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>Получить информацию</button>
        </div>
      </section>
    );
  }
}

export default ContactSection;
