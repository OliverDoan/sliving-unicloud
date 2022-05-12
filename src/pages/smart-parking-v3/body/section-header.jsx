import React, { useState } from "react";

import background from "../../../images/smart-parking-v3/jpg/bg-parking.jpg";
import car_img from "../../../images/smart-parking-v3/png/img-car.png";

const SmartHeader = () => {
  return (
    <div className="smart-parking-v3">
      <header className="smart-parking-header">
        <div className="smart-parking-content">
          <div>
            <div>SMART PARKING</div>
            <div>
              Smart Parking là giải pháp quản lý bãi giữ xe hiệu quả của
              Unicloud được ứng dụng trong hệ thống chung cư, tòa nhà, trung tâm
              thương mại. Người dùng có thể sử dụng Smart Parking App để quản lý
              xe ra vào, phát hiện chỗ trống, hướng dẫn đến vị trí đỗ xe giúp
              tiết kiệm thời gian, giảm nguồn nhân lực, góp phần tăng hiệu quả
              sức chứa cho tòa nhà mang đến cho cư dân sự thoải mái và tiện
              nghi.
            </div>
          </div>
          <div>
            <img className="back-ground-img" src={car_img} />
          </div>
        </div>
        {/* <img className="back-ground-img" src={background} alt=""></img> */}
      </header>
    </div>
  );
};

export default SmartHeader;
