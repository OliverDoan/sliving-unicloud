import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import imgItemCart1 from "../../../images/home-page-v3/svg/icon-smart-parking-item1.svg";
import imgSmartParking from "../../../images/home-page-v3/png/img-smart-parking.png";
function SectionSmartParking() {
  return (
    <section className="bg-ground-smart-parking">
      <div className="max-width-1180 p-left-right">
        <Row className="row-line-center">
          <span className="title-eng-line-center">SMART PARKING</span>
          <h1 className="title-line-center">
            Giải Pháp Trạm Gửi Xe Thông Minh
          </h1>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </Row>

        <Image src={imgSmartParking} className="smart-parking-group-img" />
        <h2 className="smart-parking-title">
          Ứng dụng công nghệ IoT và AI trong một giải pháp
        </h2>
        <p className="smart-parking-des">
          Giải pháp bãi đỗ xe thông minh Smart Parking sử dụng các thiết bị cũng
          như công nghệ tiên tiến giúp quản lý và vận hành bãi đỗ. Tất cả được
          điều khiển thông qua một ứng dụng (Smart Parking App), do đội ngũ
          chuyên viên kỹ thuật cao của Unicloud xây dựng.
        </p>
        <Row lg={4} md={4} xs={2} className="smart-parking-cards gx-5 gy-5">
          <Col>
            <div className="smart-parking-card">
              <div>
                <Image src={imgItemCart1} className="smart-parking-card-img" />
              </div>
              <span className="smart-parking-card-title">
                Phát hiện chỗ trống qua camera và cảm biến siêu âm.
              </span>
            </div>
          </Col>
          <Col>
            <div className="smart-parking-card">
              <div>
                <Image src={imgItemCart1} className="smart-parking-card-img" />
              </div>
              <span className="smart-parking-card-title">
                Phát hiện chỗ trống qua camera và cảm biến siêu âm.
              </span>
            </div>
          </Col>
          <Col>
            <div className="smart-parking-card">
              <div>
                <Image src={imgItemCart1} className="smart-parking-card-img" />
              </div>
              <span className="smart-parking-card-title">
                Phát hiện chỗ trống qua camera và cảm biến siêu âm.
              </span>
            </div>
          </Col>
          <Col>
            <div className="smart-parking-card">
              <div>
                <Image src={imgItemCart1} className="smart-parking-card-img" />
              </div>
              <span className="smart-parking-card-title">
                Phát hiện chỗ trống qua camera và cảm biến siêu âm.
              </span>
            </div>
          </Col>
        </Row>
        <div className="btn-group">
          <button className="advise-now-btn">
            <span>Tư vấn ngay</span>
          </button>
          <button type="button" className="learn-more-btn">
            <span>Tìm hiểu thêm</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionSmartParking;
