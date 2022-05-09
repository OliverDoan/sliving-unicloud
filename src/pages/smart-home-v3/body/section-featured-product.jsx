import React from "react";
import { Image, Row } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";

function SectionFeaturedProduct() {
  return (
    <section className="section-featured-product-bg">
      <div className="max-width-1180 p-left-right">
        <Row className="row-line-center ">
          <span className="title-eng-line-center">SMART PARKING</span>
          <h1 className="title-line-center">
            Giải Pháp Trạm Gửi Xe Thông Minh
          </h1>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </Row>
      </div>
    </section>
  );
}

export default SectionFeaturedProduct;
