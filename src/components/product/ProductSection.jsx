import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "./ProductUI.scss";

export class ProductSection extends Component {
  render() {
    return (
      <section id="product">
        <div className="product__container container">
          <h2>
            Наша <span>продукция</span>
          </h2>

          <Tabs>
            <TabList>
              <Tab>Ламинатные тубы</Tab>
              <Tab>Экструзионные тубы</Tab>
              <Tab>Другая упаковка</Tab>
            </TabList>

            <TabPanel className="tabpanel">
              <div>
                <img src="/product1.png" alt="" />
              </div>
              <div>
                <img src="/product2.png" alt="" />
              </div>
              <div>
                <img src="/product3.png" alt="" />
              </div>
              <div>
                <img src="/product4.png" alt="" />
              </div>
              <div>
                <img src="/product5.png" alt="" />
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div>
                <img src="/product1.png" alt="" />
              </div>
              <div>
                <img src="/product3.png" alt="" />
              </div>
              <div>
                <img src="/product2.png" alt="" />
              </div>
              <div>
                <img src="/product4.png" alt="" />
              </div>
              <div>
                <img src="/product5.png" alt="" />
              </div>
              <div>
                <img src="/product3.png" alt="" />
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div>
                <img src="/product1.png" alt="" />
              </div>
              <div>
                <img src="/product2.png" alt="" />
              </div>
              <div>
                <img src="/product3.png" alt="" />
              </div>
              <div>
                <img src="/product5.png" alt="" />
              </div>
              <div>
                <img src="/product4.png" alt="" />
              </div>
              <div>
                <img src="/product3.png" alt="" />
              </div>
            </TabPanel>
          </Tabs>
          <div className="footer-div">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSection;
