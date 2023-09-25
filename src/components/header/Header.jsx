import React, { Component } from "react";
import "./HeaderUI.scss";

export class Header extends Component {
  state = {
    isDark: false,
  };
  render() {
    if (this.state.isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return (
      <nav>
        <div className="container nav__container">
          <div className="nav__container--logo">
            <a href="#home">
              <img src="/logo.png" alt="" />
            </a>
          </div>
          <div className="nav__container--menu">
            <ul>
              <li className="nav-item">
                <a href="#asd" className="nav-link">
                  Продукция
                </a>
              </li>
              <li className="nav-item">
                <a href="#certificat" className="nav-link">
                  Сертификаты
                </a>
              </li>
              <li className="nav-item">
                <a href="#comand" className="nav-link">
                  Наша команда
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  O нас
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">
                  Новости
                </a>
              </li>
              <li className="nav-item">
                <a href="#vakans" className="nav-link">
                  Вакансии
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__container--theme">
            <button onClick={() => this.setState({ isDark: true })}>
              Dark
            </button>
            <button onClick={() => this.setState({ isDark: false })}>
              Light
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
