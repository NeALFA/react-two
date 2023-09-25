import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="back-top">
            <a href="#"><img src="/backtop.svg" alt="" /></a>
          </div>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
