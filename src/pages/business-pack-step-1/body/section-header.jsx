import React from "react";
import background1 from "../../../images/business-pack-step-1/png/bg-header1.png";
import background2 from "../../../images/business-pack-step-1/png/bg-header2.png";

const SectionHeader = () => {
  return (
    <header className="section-step-1-header">
      <div className="content-container">
        <div className="content">
          <h1 className="content-title">Gói Giải Pháp</h1>
          <h1 className="content-title small">Dành Cho Hộ Gia Đình</h1>
          <div className="text-container">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
      <img src={background2} className="header-background" />
      <img src={background1} className="header-background" />
    </header>
  );
};
export default SectionHeader;
