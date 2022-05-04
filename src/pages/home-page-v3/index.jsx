import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import SectionHelpMore from "./body/section-help";
import SectionFeaturedProject from "./body/section-featured-project";
import SectionSmartLighting from "./body/section-smart-lighting";
import SectionSmartParking from "./body/section-smart-parking";

const IndexPage = () => {
  return (
    <main id="main_page">
      <SectionSmartParking />
      <SectionSmartLighting />
      <SectionFeaturedProject />
      <SectionHelpMore />
    </main>
  );
};

export default IndexPage;
