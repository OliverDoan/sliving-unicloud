import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionDefinition from "./body/section-definition";
import { SectionParkingSolution } from "./body/section-parking-solution";

const SmartParking = () => {
  return (
    <main>
      <SectionParkingSolution />
    </main>
  );
};

export default SmartParking;
