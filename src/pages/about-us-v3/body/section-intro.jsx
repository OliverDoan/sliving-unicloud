import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

// import iconVision from "@images/about-us-v3/svg/icon-vision.svg";
// import iconMission from "@images/about-us-v3/svg/icon-mission.svg";
// import iconValue from "@images/about-us-v3/svg/icon-value.svg";

import iconVision from "../../../images/about-us-v3/svg/icon-vision.svg";
import iconMission from "../../../images/about-us-v3/svg/icon-mission.svg";
import iconValue from "../../../images/about-us-v3/svg/icon-value.svg";

export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 16px 0px;
  border-radius: 200px;
`;

const SectionIntro = () => {
  const introItems = [
    {
      id: 0,
      icon: iconVision,
      contents: [
        {
          id: 0,
          content:
            "Không ngừng đổi mới, sáng tạo, Unicloud đồng hành cùng Chính phủ trên con đường số hóa nền kinh tế, gia nhập nhóm doanh nghiệp dẫn đường" +
            "trong cuộc đua cách mạng số vì một Việt Nam hùng cường với nền tảng công nghệ mang tầm Quốc tế. ",
        },
        {
          id: 1,
          content:
            "Unicloud giải quyết các vấn đề của người Việt bằng trí tuệ của người Việt, tháo gỡ các bài toán khó cho ngành dịch vụ bằng sự chủ động," +
            "nền tảng công nghệ tân tiến, kết nối đa nhiệm tất cả các Thiết bị - Dịch vụ - Con người. Hướng đến trở thành tập đoàn TOP 10 Đông Nam Á" +
            "và TOP 500 thế giới với 5.000 nhân sự tại ít nhất 10 quốc gia trên toàn cầu.",
        },
      ],
    },
    {
      id: 1,
      icon: iconMission,
      contents: [
        {
          id: 0,
          content:
            "Mang sứ mệnh tiên phong chuyển đổi kinh tế số, đặt mục tiêu góp phần xây dựng Chính phủ điện tử hướng tới Chính phủ số và nền kinh tế" +
            "số, Unicloud nghiên cứu và phát triển các giải pháp công nghệ đa năng và toàn diện, làm thay đổi bộ mặt công nghệ quốc gia, nâng tầm chất xám của người Việt.",
        },
      ],
    },
    {
      id: 2,
      icon: iconValue,
      listItem: [
        {
          id: 0,
          title: "Tạo các kịch bản tự động",
          subTitle:
            "Công tắc mini không dây, công tắc điều khiển không dây và khối Cube được tùy chỉnh để tự động hóa một loạt các tác vụ công việc trong nhà Thiết lập công tắc mini không dây để bật chế độ đọc. Chẳng hạn như, chỉ với một nút bấm duy nhất bạn có thể thực hiện 2 tác vụ cùng một lúc như đóng rèm cửa và tự động điều chỉnh ánh sáng đèn theo ý muốn:",
        },
        {
          id: 1,
          title: "Giám sát & nhận các tính năng cảnh báo",
          subTitle:
            "Kiểm tra lượng điện nước tiêu thụ mỗi tháng sẽ không còn khó khăn, mất nhiều thời gian và thủ công như trước nữa. Thiết bị cho phép giám sát lượng điện tiêu thụ điện và nước trực tiếp 24/24, đồng thời cho phép thiết lập các ngưỡng tiêu thụ tối đa và gửi các thông tin cảnh báo khi vượt ngưỡng. ",
        },
        {
          id: 2,
          title: "Giám sát & nhận các tính năng cảnh báo",
          subTitle:
            "Kiểm tra lượng điện nước tiêu thụ mỗi tháng sẽ không còn khó khăn, mất nhiều thời gian và thủ công như trước nữa. Thiết bị cho phép giám sát lượng điện tiêu thụ điện và nước trực tiếp 24/24, đồng thời cho phép thiết lập các ngưỡng tiêu thụ tối đa và gửi các thông tin cảnh báo khi vượt ngưỡng. ",
        },
      ],
    },
  ];

  return (
    <section className="section-intro-v3">
      <div className="intro-container-v3">
        <div className="intro-top-content">
          <h5 className="intro-title-v3 text-uppercase">ABOUT US</h5>
          <h3 className="intro-subtitle-v3">Giới thiệu tổng quan</h3>
          <Divider />
        </div>
        <div className="intro-bottom-content">
          {introItems.map((intro) => {
            return (
              <Row
                key={intro.id}
                className={`${intro.id % 2 === 0 ? "" : "intro-row-revert"} `}
              >
                <Col lg={7}>
                  <img src={intro.icon} alt="" className="intro-icon" />
                </Col>
                <Col lg={5}>
                  {intro?.contents &&
                    intro?.contents.map((contentItem) => (
                      <p key={contentItem.id}>{contentItem.content}</p>
                    ))}
                  {intro?.listItem &&
                    intro?.listItem.map((listChild) => (
                      <div key={listChild.id}>
                        <h3>{listChild.title}</h3>
                        <h4>{listChild.subTitle}</h4>
                      </div>
                    ))}
                </Col>
              </Row>
            );
          })}
        </div>
      </div>

      {/* code mẫu */}
      {/* <section className="ekyc-service">
      <div className="ekyc-service-wrap container-child">
        {listService.map((service) => (
          <div
            key={service.id}
            className={`template-grid-2 ekyc-service-group 
          ${service.id % 2 === 0 ? '' : 'ekyc-service-revert'}`}
          >
            <div className="ekyc-service-left ekyc-service-text">
              <h2 className="ekyc-service-detail">{service.title}</h2>
              <p className="ekyc-service-detail">{service.desc}</p>
              <button type="button" className="btn-looking">
                <span>Tìm hiểu thêm</span>
              </button>
            </div>
            <div className="ekyc-service-right">
              <img src={service.image} alt="img document" />
            </div>
          </div>
        ))}
      </div>
    </section> */}
    </section>
  );
};
export default SectionIntro;
