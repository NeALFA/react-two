import React, { Component } from "react";
import "./FooterUI.scss";
export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__container container">
          <div className="footer__header">
            <img src="/logo.png" alt="" />
            <div className="footer-social">
              <img src="/social.png" alt="" />
            </div>
          </div>
          <div className="footer__body">
            <div className="footer__body--left">
              <div>
                <ul>
                  <li>
                    <a href="#fska">
                      <h3>Продукция</h3>
                    </a>
                  </li>
                  <li>
                    <a href="#fska">Ламинатные тубы</a>
                  </li>
                  <li>
                    <a href="#fska">Экструзионные тубы</a>
                  </li>
                  <li>
                    <a href="#fska">Другая упаковка</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#about">
                      <h3>Компания</h3>
                    </a>
                  </li>
                  <li>
                    <a href="#about">О нас</a>
                  </li>
                  <li>
                    <a href="#about">Наша команда</a>
                  </li>
                  <li>
                    <a href="#about">Сертификаты</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#about">
                      <h3>Разделы</h3>
                    </a>
                  </li>
                  <li>
                    <a href="#about">Контакты</a>
                  </li>
                  <li>
                    <a href="#about">Новости</a>
                  </li>
                  <li>
                    <a href="#about">Вакансии</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__body--right">
              <div>
                <h2>Беларусь</h2>
                <a href="tel">+375 (17) 270 53 77</a>
                <a href="tel">+375 (17) 270 53 78</a>
              </div>
              <div>
                <h2>Европа</h2>
                <a href="tel">+48 73 1111 044</a>
              </div>
              <div>
                <h2>Москва</h2>
                <a href="tel">+7 (495) 280 73 44</a>
                <a href="tel">+7 (495) 280 73 44</a>
              </div>
              <div>
                <h2>Екатеринбург</h2>
                <a href="tel">+7 (343) 346 82 06</a>
              </div>
            </div>
          </div>
          <p>
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
