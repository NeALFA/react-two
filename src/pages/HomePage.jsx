import React, { Component, Fragment } from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import CertificateSection from "../components/certificate/CertificateSection";
import "./HomePageUI.scss";
import ProductSection from "../components/product/ProductSection";
import TeamSection from "../components/team/TeamSection";
import ContactSection from "../components/contact/ContactSection";
import News from "../components/news/News";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeroSection />
        <AboutSection />
        <CertificateSection />
        <ProductSection />
        <ContactSection />
        <TeamSection />
        <News />
      </Fragment>
    );
  }
}

export default HomePage;
