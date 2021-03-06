import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import imgUnderLine from "../../../images/home-page-v3/svg/title-line-under.svg";
import imgItemCart1 from "../../../images/home-page-v3/svg/icon-smart-parking-item1.svg";
import imgItemCart2 from "../../../images/home-page-v3/svg/icon-smart-parking-item2.svg";
import imgItemCart3 from "../../../images/home-page-v3/svg/icon-smart-parking-item3.svg";
import imgItemCart4 from "../../../images/home-page-v3/svg/icon-smart-parking-item4.svg";
import imgSmartParking from "../../../images/home-page-v3/png/img-smart-parking.png";
function SectionSmartParking() {
  const listItemCard = [
    {
      id: 0,
      linkImg: imgItemCart1,
      title: "Phát hiện chỗ trống qua camera và cảm biến siêu âm.",
    },
    {
      id: 1,
      linkImg: imgItemCart2,
      title: "Đặt chỗ trước dẫn đường qua vị trí đỗ bằng App.",
    },
    {
      id: 2,
      linkImg: imgItemCart3,
      title: "Đặt chỗ trước dẫn đường qua vị trí đỗ bằng App.",
    },
    {
      id: 3,
      linkImg: imgItemCart4,
      title: "Công nghệ Bluetooth dẫn đường cho xe đến vị trí.",
    },
  ];
  return (
    <section className="bg-ground-smart-parking">
      <div className="container-v3">
        <Row className="row-line-center ">
          <span className="title-eng-line-center">SMART PARKING</span>
          <h1 className="title-line-center">
            Giải Pháp Trạm Gửi Xe Thông Minh
          </h1>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <Image src={imgSmartParking} className="smart-parking-group-img" />
          <h2 className="smart-parking-title">
            Ứng dụng công nghệ IoT và AI trong một giải pháp
          </h2>
          <p className="smart-parking-des">
            Giải pháp bãi đỗ xe thông minh Smart Parking sử dụng các thiết bị
            cũng như công nghệ tiên tiến giúp quản lý và vận hành bãi đỗ. Tất cả
            được điều khiển thông qua một ứng dụng (Smart Parking App), do đội
            ngũ chuyên viên kỹ thuật cao của Unicloud xây dựng.
          </p>
        </Row>

        <Row lg={4} md={4} xs={2} className="smart-parking-cards">
          {listItemCard.map((itemCard) => (
            <Col className="gx-5 gy-3">
              <div className="smart-parking-card">
                <div className="smart-parking-card-top">
                  <Image
                    src={itemCard.linkImg}
                    className="smart-parking-card-img"
                  />
                </div>
                <span className="smart-parking-card-title">
                  {itemCard.title}
                </span>
              </div>
            </Col>
          ))}
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
