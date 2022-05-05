import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import iconCertification1 from "../../../images/about-us-v3/svg/icon-certification1.svg";
import iconCertification2 from "../../../images/about-us-v3/svg/icon-certification2.svg";
import iconCertification3 from "../../../images/about-us-v3/svg/icon-certification3.svg";
import iconCertification4 from "../../../images/about-us-v3/svg/icon-certification4.svg";
import iconActivity1 from "../../../images/about-us-v3/png/img-activity1.png";
import iconActivity2 from "../../../images/about-us-v3/png/img-activity2.png";
import iconActivity3 from "../../../images/about-us-v3/png/img-activity3.png";
import iconActivity4 from "../../../images/about-us-v3/png/img-activity4.png";
import a from "../../../images/about-us-v3/png/bg-activity.png";

function SectionActivity() {
  const listCertification = [
    {
      id: 1,
      linkIconLogo: iconCertification1,
      title: "Chứng nhận Đầu tư Khu công nghệ cao",
    },
    {
      id: 2,
      linkIconLogo: iconCertification2,
      title: "Chứng nhận Cleanroom Fiel - Phòng Sạch",
    },
    {
      id: 3,
      linkIconLogo: iconCertification3,
      title: "Chứng nhận EMV Level",
    },
    {
      id: 4,
      linkIconLogo: iconCertification4,
      title: "Chứng nhận CE-FCC",
    },
  ];
  return (
    <section className="bg-section-activity">
      {/* <div className="a">
        <Image src={a} />
      </div> */}
      <Container className=" p-left-right section-activity-container">
        <h3 className="section-activity-title">Lĩnh Vực Hoạt Động</h3>
        <Row md={4} xs={2} className="activity-row">
          <Col>
            <div className="activity-card">
              <div className="activity-card-img">
                <Image src={iconActivity1} />
              </div>
              <span className="activity-card-title">Fintech</span>
            </div>
          </Col>
          <Col>
            <div className="activity-card">
              <div className="activity-card-img">
                <Image src={iconActivity2} />
              </div>
              <span className="activity-card-title">Smart City</span>
            </div>
          </Col>
          <Col>
            <div className="activity-card">
              <div className="activity-card-img">
                <Image src={iconActivity3} />
              </div>
              <span className="activity-card-title">Digital Tranformation</span>
            </div>
          </Col>
          <Col>
            <div className="activity-card">
              <div className="activity-card-img">
                <Image src={iconActivity4} />
              </div>
              <span className="activity-card-title">Virtual Reality - VR</span>
            </div>
          </Col>
        </Row>
        <h3 className="section-activity-title">Chứng Nhận</h3>
        <Row md={4} xs={2} className="gx-4 gy-4">
          {listCertification.map((item) => (
            <Col key={item.id} className="gx-4 gy-4">
              <div className="certification-card">
                <div className="certification-card-img">
                  <Image src={item.linkIconLogo} />
                </div>
                <span className="certification-card-title">{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SectionActivity;
