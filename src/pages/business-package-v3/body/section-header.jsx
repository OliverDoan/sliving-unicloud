import React from "react";
import { Col, Row } from "react-bootstrap";
import bgCloud from "../../../images/business-package-v3/bg-cloud.png";
import bgLinear from "../../../images/business-package-v3/bg-linear.png";
import bgBuilding from "../../../images/business-package-v3/building.png";
function SectionHeader() {
  return (
    <header className="section-business-package-v3 ">
      <img src={bgCloud} alt="" />
      <img src={bgLinear} alt="" />
      <img src={bgBuilding} alt="" />
      <div className="container-v3">
        <Row>
          <Col md={6} className="border">
            <h2 className="text-white business-package-title">Gói Giải Pháp</h2>
            <h4 className="text-white business-package-subtitle">
              Dành Cho Doanh Nghiệp
            </h4>
            <p className="text-white business-package-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </Col>
          <Col md={6} className="border"></Col>
        </Row>
      </div>
    </header>
  );
}

export default SectionHeader;
