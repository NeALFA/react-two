import React, { Component } from "react";
import "./NewsUI.scss";

export class News extends Component {
  render() {
    return (
      <section id="news">
        <div className="news__container container">
          <h2>Новости</h2>
          <div className="news__container--body">
            <div className="news-card">
              <img src="/news-card1.png" alt="asd" />
              <p>28.01.2022</p>
              <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
            </div>
            <div className="news-card">
              <img src="/news-card2.png" alt="asd" />
              <p>21.01.2022</p>
              <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
            </div>
            <div className="news-card">
              <img src="/news-card3.png" alt="asd" />
              <p>16.01.2022</p>
              <h5>Туба, как вид упаковки</h5>
            </div>
          </div>
          <div>
            <button>Все новости</button>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
