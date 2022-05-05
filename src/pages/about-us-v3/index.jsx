import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionIntro from "./body/section-intro";
import SectionHelpMore from "../../components/help-more/section-help-more";
import SectionOurPartner from "./body/section-our-partner";

const AboutPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionOurPartner />
      <SectionHelpMore />
    </main>
  );
};

export default AboutPage;
