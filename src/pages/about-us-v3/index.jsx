import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionIntro from "./body/section-intro";
import SectionHelpMore from "../../components/help-more/section-help-more";

const AboutPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionHelpMore />
    </main>
  );
};

export default AboutPage;
