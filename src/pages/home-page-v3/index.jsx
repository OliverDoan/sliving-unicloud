import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import SectionFeaturedProject from "./body/section-featured-project";
import SectionSmartLighting from "./body/section-smart-lighting";
import SectionSmartParking from "./body/section-smart-parking";
import SectionHelpMore from "../../components/help-more/section-help-more";

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
