import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import iconPartner1 from "../../../images/about-us-v3/svg/icon-partner1.svg";
import iconPartner2 from "../../../images/about-us-v3/svg/icon-partner2.svg";
import iconPartner3 from "../../../images/about-us-v3/svg/icon-partner3.svg";
import iconPartner4 from "../../../images/about-us-v3/svg/icon-partner4.png";
import iconPartner5 from "../../../images/about-us-v3/svg/icon-partner5.svg";
import iconPartner6 from "../../../images/about-us-v3/svg/icon-partner6.svg";
import iconPartner7 from "../../../images/about-us-v3/svg/icon-partner7.svg";
import iconPartner8 from "../../../images/about-us-v3/svg/icon-partner8.svg";
import iconPartner9 from "../../../images/about-us-v3/svg/icon-partner9.svg";
import iconPartner10 from "../../../images/about-us-v3/svg/icon-partner10.svg";
import iconPartner11 from "../../../images/about-us-v3/svg/icon-partner11.svg";
import iconPartner12 from "../../../images/about-us-v3/svg/icon-partner12.svg";

function SectionOurPartner() {
  const listItemLogo = [
    {
      id: 1,
      linkIconLogo: iconPartner1,
    },
    {
      id: 2,
      linkIconLogo: iconPartner2,
    },
    {
      id: 3,
      linkIconLogo: iconPartner3,
    },
    {
      id: 4,
      linkIconLogo: iconPartner4,
    },
    {
      id: 5,
      linkIconLogo: iconPartner5,
    },
    {
      id: 6,
      linkIconLogo: iconPartner6,
    },
    {
      id: 7,
      linkIconLogo: iconPartner7,
    },
    {
      id: 8,
      linkIconLogo: iconPartner8,
    },
    {
      id: 9,
      linkIconLogo: iconPartner9,
    },
    {
      id: 10,
      linkIconLogo: iconPartner10,
    },
    {
      id: 11,
      linkIconLogo: iconPartner11,
    },
    {
      id: 12,
      linkIconLogo: iconPartner12,
    },
  ];
  return (
    <section className="bg-section-our-partner">
      <Container className="container-v3 our-partner-container">
        <Row className="row-line-center">
          <span className="title-eng-line-center">OUR PARTNER</span>
          <h2 className="title-line-center">?????i t??c c???a ch??ng t??i</h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <p className="description-line-center">
            Li??n k???t v???i nh???ng th????ng hi???u ???c?? t???m??? v?? ???c?? l???c??? l?? m???t trong
            nh???ng y???u t??? quan tr???ng ????? ?????t ???????c th??nh c??ng trong kinh doanh.
            Th???u hi???u ??i???u ????, Unicloud Group lu??n t??ch c???c m??? r???ng h???p t??c v???i
            nh???ng ?????i t??c chi???n l?????c c?? t??n tu???i trong v?? ngo??i n?????c tr??n c?? s???
            b???n v???ng, tin c???y, gia t??ng gi?? tr??? cho t???t c??? c??c b??n.
          </p>
        </Row>
        <Row lg={6} md={3} xs={2} className="logo-items">
          {listItemLogo.map((itemLogo) => (
            <Col key={itemLogo.id} className="logo-item-content">
              <div className="logo-item-img">
                <Image src={itemLogo.linkIconLogo} className="" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SectionOurPartner;
