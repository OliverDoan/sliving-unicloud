import React from "react";
import styled from "styled-components";

import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css/navigation";
//  import "swiper/css/swiper.css";
//  import "swiper/swiper-bundle.css";

// import imgSmartFactory from "@images/about-us-v3/png/smart-factory.png";
import imgSmartFactory from "../../../images/about-us-v3/png/smart-factory.png";

// import iconLicense from "@images/about-us-v3/svg/icon-license.svg";
// import iconPCCC from "@images/about-us-v3/svg/icon-pccc.svg";
// import iconSmartFactory from "@images/about-us-v3/svg/icon-smart-factory.svg";

import iconLicense from "../../../images/about-us-v3/svg/icon-license.svg";
import iconPCCC from "../../../images/about-us-v3/svg/icon-pccc.svg";
import iconSmartFactory from "../../../images/about-us-v3/svg/icon-smart-factory.svg";

// import slideSmartFactory1 from "@images/about-us-v3/jpg/.jpg";
import slideSmartFactory1 from "../../../images/about-us-v3/jpg/img-1.jpg";

// import slideSmartFactory2 from "@images/about-us-v3/jpg/.jpg";
import slideSmartFactory2 from "../../../images/about-us-v3/jpg/img-2.jpg";

// import slideSmartFactory3 from "@images/about-us-v3/jpg/.jpg";
import slideSmartFactory3 from "../../../images/about-us-v3/jpg/img-3.jpg";

// import slideSmartFactory4 from "@images/about-us-v3/jpg/.jpg";
import slideSmartFactory4 from "../../../images/about-us-v3/jpg/img-4.jpg";

// import slideSmartFactory5 from "@images/about-us-v3/jpg/.jpg";
import slideSmartFactory5 from "../../../images/about-us-v3/jpg/img-5.jpg";

// import layoutSmartFactory1 from "@images/about-us-v3/png/layout1.png";
import layoutSmartFactory1 from "../../../images/about-us-v3/png/layout1.png";

// import layoutSmartFactory2 from "@images/about-us-v3/png/layout2.png";
import layoutSmartFactory2 from "../../../images/about-us-v3/png/layout2.png";

// import layoutSmartFactory3 from "@images/about-us-v3/png/layout3.png";
import layoutSmartFactory3 from "../../../images/about-us-v3/png/layout3.png";

// import layoutSmartFactory4 from "@images/about-us-v3/png/layout4.png";
import layoutSmartFactory4 from "../../../images/about-us-v3/png/layout4.png";

// import layoutSmartFactory5 from "@images/about-us-v3/png/layout5.png";
import layoutSmartFactory5 from "../../../images/about-us-v3/png/layout5.png";

// import layoutSmartFactory6 from "@images/about-us-v3/png/layout6.png";
import layoutSmartFactory6 from "../../../images/about-us-v3/png/layout6.png";

// import layoutSmartFactory7 from "@images/about-us-v3/png/layout7.png";
import layoutSmartFactory7 from "../../../images/about-us-v3/png/layout7.png";

SwiperCore.use([Navigation]);

export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 16px 0px;
  border-radius: 200px;
`;

const SectionSmartFactory = () => {
  const factoryItems = [
    { id: 0, icon: iconLicense, title: "Được khu Công nghệ cao cấp phép" },
    { id: 1, icon: iconSmartFactory, title: "Nhà máy thông minh 4.0" },
    { id: 2, icon: iconPCCC, title: "Chứng nhận Phòng cháy chữa cháy" },
  ];

  const listSlide = [
    {
      id: 1,
      img: slideSmartFactory1,
    },
    {
      id: 2,
      img: slideSmartFactory2,
    },
    {
      id: 3,
      img: slideSmartFactory3,
    },
    {
      id: 4,
      img: slideSmartFactory4,
    },
    {
      id: 5,
      img: slideSmartFactory5,
    },
  ];

  return (
    <section className="section-smart-factory-v3">
      <div className="smart-factory-container-v3">
        <div className="factory-top-content">
          <h5 className="factory-title-v3 text-uppercase">SMART FACTORY</h5>
          <h3 className="factory-subtitle-v3">Nhà máy thông minh</h3>
          <Divider />
        </div>
        <div className="factory-bottom-content">
          <div className="factory-bottom-left-content">
            <div className="factory-produce-content">
              <h1 className="factory-title-paragraph">Tự Sản Xuất</h1>
              <p className="factory-first-desc">
                Smart Factory của Unicloud được trang bị với hệ thống dây chuyền
                máy móc lắp ráp linh kiện hiện đại, mang tính tự động hoá cao
                cho cả linh kiện dán và cắm, đồng thời cũng đảm bảo các yêu cầu
                cao về quy trình lắp ráp linh kiện tiên tiến nhất. Ngoài ra,
                toàn bộ nhà máy còn được điều khiển bởi hệ thống kết nối IoT
                thông minh được chính Unicloud thiết kế và lắp đặt.
              </p>
              <p className="factory-second-desc">
                Với mong muốn mang tới những sản phẩm có chất lượng cao nhất tới
                khách hàng, ngoài quy trình thiết kế khép kín, mỗi sản phẩm điện
                tử của Unicloud còn áp dụng quy trình sản xuất được thực hiện
                một cách khép kín thông qua việc đầu tư vào nhà máy thông minh,
                dây chuyền lắp ráp linh kiện hiện đại.
              </p>
            </div>
            <div className="factory-list-item">
              {factoryItems.map((item) => (
                <div key={item.id} className="factory-item-container">
                  <img src={item.icon} alt=""></img>
                  <span className="factory-item-desc">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="factory-bottom-right-content">
            <img
              src={imgSmartFactory}
              alt=""
              className="smart-factory-img"
            ></img>
          </div>
        </div>

        <div className="factory-second-bottom-content">
          <div
            className="content-wrap"
          >
            <div className="factory-second-bottom-left-content">
              <div className="factory-second-produce-content">
                <h1 className="factory-title-paragraph">Tự Sản Xuất</h1>
                <p className="factory-first-desc">
                  Smart Factory của Unicloud được trang bị với hệ thống dây chuyền
                  máy móc lắp ráp linh kiện hiện đại, mang tính tự động hoá cao
                  cho cả linh kiện dán và cắm, đồng thời cũng đảm bảo các yêu cầu
                  cao về quy trình lắp ráp linh kiện tiên tiến nhất. Ngoài ra,
                  toàn bộ nhà máy còn được điều khiển bởi hệ thống kết nối IoT
                  thông minh được chính Unicloud thiết kế và lắp đặt.
                </p>
              </div>
            </div>
            <div className="factory-second-bottom-right-content">
              <img
                src={layoutSmartFactory1}
                alt=""
                className="smart-factory-img smart-factory-layout-1"
              ></img>
              <img
                src={layoutSmartFactory2}
                alt=""
                className="smart-factory-img smart-factory-layout-2"
              ></img>
              <img
                src={layoutSmartFactory3}
                alt=""
                className="smart-factory-img smart-factory-layout-3"
              ></img>
              <img
                src={layoutSmartFactory4}
                alt=""
                className="smart-factory-img smart-factory-layout-4"
              ></img>
              <img
                src={layoutSmartFactory5}
                alt=""
                className="smart-factory-img smart-factory-layout-5"
              ></img>
              <img
                src={layoutSmartFactory6}
                alt=""
                className="smart-factory-img smart-factory-layout-6"
              ></img>
              <img
                src={layoutSmartFactory7}
                alt=""
                className="smart-factory-img smart-factory-layout-7"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="smart-factory-slider">
        {/* <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {listSlide.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} className="swiper-interface-img" alt="" />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};
export default SectionSmartFactory;
