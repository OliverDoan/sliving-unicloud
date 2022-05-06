import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "swiper/css/bundle";

import SectionHeader from "./body/section-header";
import SectionIntro from "./body/section-intro";
import SectionSmartFactory from "./body/section-smart-factory";

const AboutPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionIntro />
      <SectionSmartFactory />
    </main>
  );
};

export default AboutPage;
