import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";

import SectionSmartParking from "./body/section-smart-parking";

const SmartParking = () => {
  return (
    <main>
      <SectionSmartParking />
    </main>
  );
};

export default SmartParking;
