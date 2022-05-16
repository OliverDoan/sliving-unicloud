import React, { useState } from "react";

import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import switchItem1 from "@images/smart-home-v3/png/rectangle-switch.png";
import switchItem1 from "../../../images/smart-home-v3/png/rectangle-switch.png";

// import switchItem2 from "@images/smart-home-v3/png/square-switch.png";
import switchItem2 from "../../../images/smart-home-v3/png/square-switch.png";

// import switchItem3 from "@images/smart-home-v3/png/sensor-switch.png";
import switchItem3 from "../../../images/smart-home-v3/png/sensor-switch.png";

// import switchItem4 from "@images/smart-home-v3/png/script-switch.png";
import switchItem4 from "../../../images/smart-home-v3/png/script-switch.png";

// import switchItem5 from "@images/smart-home-v3/png/curtain-motor.png";
import switchItem5 from "../../../images/smart-home-v3/png/curtain-motor.png";

// import switchItem6 from "@images/smart-home-v3/png/gate-way.png";
import switchItem6 from "../../../images/smart-home-v3/png/gate-way.png";

// import switchItem7 from "@images/smart-home-v3/png/gateway-slug.png";
import switchItem7 from "../../../images/smart-home-v3/png/gateway-slug.png";

// import switchItemTelephone from "@images/smart-home-v3/png/telephone-switch.png";
import switchItemTelephone from "../../../images/smart-home-v3/png/telephone-switch.png";

// import appStoreItem from "@images/smart-home-v3/png/download-app-store.png";
import appStoreItem from "../../../images/smart-home-v3/png/download-app-store.png";

// import ggPlayItem from "@images/smart-home-v3/png/download-gg-play.png";
import ggPlayItem from "../../../images/smart-home-v3/png/download-gg-play.png";

// import BigArrowLeft from "@images/smart-home-v3/svg/big-arrow-left.svg";
import BigArrowLeft from "../../../images/smart-home-v3/svg/big-arrow-left.svg";

// import BigArrowRight from "@images/smart-home-v3/svg/big-arrow-right.svg";
import BigArrowRight from "../../../images/smart-home-v3/svg/big-arrow-right.svg";

SwiperCore.use([Navigation]);

const listSlide = [
  {
    id: 0,
    title: "Thông Minh",
    subTitle: "SMART SWITCH",
    contents: [
      {
        id: 0,
        title: "Trải nghiệm mới từ lớp vỏ truyền thống:",
        desc: " Với ngoại hình của dòng cơ truyền thống đi kèm với các tính năng hiện đại, sản phẩm tạo cảm giác gần gũi, quen thuộc nhưng mang lại trải nghiệm hoàn toàn mới mẻ và tiện lợi.",
      },
      {
        id: 1,
        title: "Dễ sử dụng:",
        desc: " Thông qua mạng Wifi/ Zigbee kết nối các thiết bị chỉ qua vài bước thiết lập đơn giản, giúp bạn bước vào một không gian Smart Living đẳng cấp.",
      },
      {
        id: 2,
        title: "Tính năng vượt trội:",
        desc: " Ngoài tính năng điều khiển bật/ tắt cục bộ như thường, sản phẩm còn có khả năng kết nối thông qua Gateway để điều khiển trên Internet. Chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy, độ sáng, thông báo trạng thái của thiết bị trên Gateway.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem1,
      },
      {
        id: 1,
        img: switchItem2,
      },
    ],
    titles: [
      {
        id: 0,
        title: "hình chữ nhật",
      },
      {
        id: 1,
        title: "hình vuông",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 1,
    title: "Cảm Ứng",
    subTitle: "TOUCH SWITCH",
    contents: [
      {
        id: 0,
        title: "Thiết kế sang trọng:",
        desc: " Sản phẩm có mặt kính cường lực chống trầy, thiết kế đơn giản cùng viền nhôm mạ vàng 18k cao cấp, các góc bo tròn an toàn. được thiết kế tương thích với loại đế âm tường tạo cho người dùng thuận tiện lắp đặt và sử dụng.",
      },
      {
        id: 1,
        title: "Tính năng vượt trội:",
        desc: " Với tính năng bật/tắt cục bộ bằng cảm ứng điện dung, sản phẩm còn có khả năng chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy độ sáng, thông báo trạng thái online lên Gateway.",
      },
    ],

    listItem: [
      {
        id: 0,
        img: switchItem3,
      },
      {
        id: 1,
        img: switchItem4,
      },
    ],
    titles: [
      {
        id: 0,
        title: "cảm ứng",
      },
      {
        id: 1,
        title: "kịch bản",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 2,
    title: "Động Cơ Rèm",
    subTitle: "SMART CURTAIN",
    contents: [
      {
        id: 0,
        title: "Thiết kế dễ dàng lắp đặt và sử dụng:",
        desc: " Toàn bộ sản phẩm bên ngoài được làm bằng nhôm cao cấp, khả năng chịu lực va chạm mạnh, chịu nhiệt và chống ăn mòn cùng với kích thước nhỏ gọn nên phù hợp với nhiều loại hình không gian khác nhau.",
      },
      {
        id: 1,
        title: "Hoạt động dựa trên tương tác vật lý:",
        desc: " Với động cơ rèm thông minh, người dùng dễ dàng điều khiển từ xa thông qua ứng dụng hoặc chạy kịch bản mở/đóng theo nhu cầu sử dụng. Khi gặp sự cố về điện, thiết bị vẫn có thể hoạt động bình thường thông qua mở và đóng vật lý dễ dàng.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem5,
      },
    ],
    titles: [],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 3,
    title: "Gateway",
    subTitle: "GATEWAY",
    contents: [
      {
        id: 0,
        title: "Kết nối ổn định & tương thích đa dạng:",
        desc: " Ngoài tính năng điều khiển bật/ tắt cục bộ như thường, sản phẩm còn có khả năng kết nối thông qua Gateway để điều khiển trên Internet. Chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy, độ sáng, thông báo trạng thái của thiết bị trên Gateway.",
      },
      {
        id: 1,
        title: "Độ bảo mật cao:",
        desc: " Sử dụng công nghệ mã hoá và xác thực đầu cuối, khi điều khiển các thiết bị từ xa thì dữ liệu có liên quan sẽ được mã hoá trong quá trình gửi. Vì vậy đảm bảo quyền riêng tư và tính bảo mật cho dữ liệu người dùng.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem6,
      },
      {
        id: 1,
        img: switchItem7,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Gateway",
      },
      {
        id: 1,
        title: "Gateway Slug",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 4,
    title: "Ứng Dụng Sliving Điều Khiển Từ Xa",
    subTitle: "SLIVING APP",
    contents: [
      {
        id: 0,
        title: "Tính năng vượt trội:",
        desc: " Thiết kế nhỏ gọn, tinh tế giúp người tiêu dùng dễ dàng sử dụng, dễ sửa chữa và bảo hành. Thiết bị có thể thay thế remote điều khiển của TV, quạt, điều hoà, rèm cửa,... bằng cách đọc lệnh IR, RF. Hỗ trợ điều khiển từ xa thông qua ứng dụng Sliving, giọng nói, chạy kịch bản hoặc qua trợ lý ảo như Google Assistant, Siri, Alexa,...",
      },
      {
        id: 1,
        title: "Giám sát & cảnh báo:",
        desc: " Kiểm soát năng lượng tiêu dùng thông minh nhờ có tính năng kết nối hai chiều với dàn lạnh, vừa có khả năng điều khiển và giám sát các thông số môi trường như nhiệt độ, độ ẩm,... và đưa ra các cảnh báo kịp thời đến người dùng.",
      },
    ],
    listItem: [],
    titles: [],
    phoneImg: {
      img: switchItemTelephone,
    },
    downloadObjects: [
      {
        id: 0,
        img: appStoreItem,
      },
      {
        id: 1,
        img: ggPlayItem,
      },
    ],
  },
];

const ProductItemSwiper = ({ slide }) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <div className="product-left-content">
      {slide?.listItem && slide?.listItem.length > 0 && (
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          className="banner-products-slider"
          slidesPerView={1}
          onSwiper={(s) => {
            setSwiper(s);
          }}
          onSlideChange={(s) => {
            setSwiperIndex(s.realIndex);
          }}
        >
          {slide?.listItem.map((slideItem) => (
            <>
              <SwiperSlide key={slideItem.id}>
                <img className="swiper-image" src={slideItem.img} alt="" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      )}
      {slide?.titles && slide?.titles.length > 0 && (
        <div className="banner-products-btn-group">
          {slide?.titles.map((btnItem) => {
            return (
              <div
                className={`${
                  swiperIndex === btnItem.id
                    ? "products-btn-item active"
                    : "products-btn-item"
                } `}
                onClick={() => {
                  swiper.slideTo(btnItem.id);
                }}
              >
                <span className="product-item-title">{btnItem.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SectionProductsSlider = () => {
  const [toggleState, setToggleState] = useState(0);

  const increaseToggleTab = () => {
    setToggleState((prev) => (prev === listSlide.length - 1 ? prev : prev + 1));
  };

  const decreaseToggleTab = () => {
    setToggleState((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section className="smart-home-v3">
      <div className="smart-home-bg-left">
        <div
          className="btn-big-arrow-left"
          onClick={() => {
            decreaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
        <div
          className="btn-big-arrow-right-mobie"
          onClick={() => {
            increaseToggleTab();
          }}
        >
          <img src={BigArrowLeft} alt=""></img>
        </div>
      </div>
      <div className="smart-home-bg-right">
        <div
          className="btn-big-arrow-right"
          onClick={() => increaseToggleTab()}
        >
          <img src={BigArrowRight} alt=""></img>
        </div>
      </div>
      <div className="products-slider">
        {listSlide.map((slide) => (
          <div
            className={
              toggleState === slide.id
                ? "product-slide-wrapper product-slide-wrapper-active"
                : "product-slide-wrapper"
            }
            key={slide.id}
          >
            <div className="left-content-container animate fadeUp">
              {!slide.phoneImg && slide?.downloadObjects?.length === 0 && (
                <ProductItemSwiper slide={slide} />
              )}
              {slide?.phoneImg && (
                <div className="product-phone-wrapper">
                  <img src={slide.phoneImg.img} alt=""></img>
                  {slide?.downloadObjects?.length > 0 && (
                    <div className="download-apps-container">
                      {slide?.downloadObjects.map((object) => (
                        <div className="download-app-item">
                          <img
                            src={object.img}
                            alt=""
                            className="download-app-img"
                          ></img>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="right-content-container animate fadeUp">
              <div className="product-right-content">
                <h4 className="product-right-subtitle">{slide.subTitle}</h4>
                <h1 className="product-right-title">{slide.title}</h1>
                <div className="product-right-divider"></div>
                <div className="product-right-all-contents">
                  {slide?.contents &&
                    slide?.contents.map((content) => (
                      <p className="product-right-desc-container">
                        <span className="product-right-main-title">
                          {content.title}
                        </span>
                        {content.desc}
                      </p>
                    ))}
                </div>
                <div className="btn-group">
                  <button className="advise-now-btn">
                    <span>Tư vấn ngay</span>
                  </button>
                  <button type="button" className="learn-more-btn">
                    <span>Tìm hiểu thêm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SectionProductsSlider;
