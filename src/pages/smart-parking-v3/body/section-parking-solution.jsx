import React from "react";
import item1Img from "../../../images/smart-parking-v3/png/img-solution1.png";
import item2Img from "../../../images/smart-parking-v3/png/img-solution2.png";
import connector from "../../../images/smart-parking-v3/svg/icon-connector.svg";
import tv from "../../../images/smart-parking-v3/svg/icon-tv.svg";
import phone from "../../../images/smart-parking-v3/svg/icon-phone.svg";
import dualrect from "../../../images/smart-parking-v3/svg/icon-dual-rect.svg";
import wifi from "../../../images/smart-parking-v3/svg/icon-wifi.svg";
import unicloud from "../../../images/smart-parking-v3/svg/icon-unicloud.svg";
import security from "../../../images/smart-parking-v3/svg/icon-security.svg";

const ListItem = [
  {
    title: "Giải Pháp Bãi Đỗ Xe Trong Hầm",
    secondTitle: "Giải Pháp Sơ Đồ Bãi Đỗ Xe Trong Hầm",
    mainImg: item1Img,
    content: {
      title: "Smart Cloud",
      text: "Thu thập và xử lý dữ liệu thông tin chính xác, hiệu quả",
      icon: unicloud,
    },
    iconList: [
      {
        icon: tv,
      },
      {
        icon: connector,
      },
      {
        icon: wifi,
      },
      {
        icon: dualrect,
      },
      {
        icon: phone,
      },
    ],
  },
  {
    title: "Bãi Đỗ Xe Ngoài Trời",
    secondTitle: "Sơ Đồ Bãi Đỗ Xe Ngoài Trời",
    mainImg: item2Img,
    content: {
      title: "Smart Cloud",
      text: "Thu thập và xử lý dữ liệu thông tin chính xác, hiệu quả",
      icon: unicloud,
    },
    iconList: [
      {
        icon: tv,
      },
      {
        icon: connector,
      },
      {
        icon: wifi,
      },
      {
        icon: dualrect,
      },
      {
        icon: phone,
      },
      {
        icon: security,
      },
    ],
  },
];

const SolutionItem = ({ item }) => {
  return (
    <div className="solution-item-container">
      <div className="solution-title">{item.title}</div>
      <div>
        <img src={item.mainImg} alt=""></img>
      </div>
      <div className="solution-title">{item.secondTitle}</div>
      <div className="solution-content">
        <div className="left-content">
          <div className="content">
            <div className="content-title">{item.content.title}</div>
            <div className="content-text">{item.content.text}</div>
          </div>
          <div className="icon">
            <img src={item.content.icon} alt="" />
          </div>
        </div>
        <div className="right-content">
          {item.iconList.map((icon) => {
            return (
              <div>
                <img src={icon.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const SectionParkingSolution = () => {
  return (
    <section className="section-parking-solution">
      <div className="parking-solution-container">
        <div className="content">
          <h2 className="sub-title">SMART PARKING</h2>
          <span className="title">Giải Pháp Smart Parking</span>
          <div className="underline"></div>
        </div>
        {ListItem.map((item) => {
          return <SolutionItem item={item} />;
        })}
      </div>
    </section>
  );
};
