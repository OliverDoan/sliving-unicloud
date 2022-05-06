import React, { useState, useEffect } from "react";

const SectionHeader = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="about-us-v3"
      style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
    >
      <div className="about-us-content">
        <h1 className="about-us-title">VỀ CHÚNG TÔI</h1>
        <p className="about-us-subtitle">
          Hệ sinh thái sản phẩm mang thương hiệu S-living thuộc tập đoàn công
          nghệ Unicloud hướng tới cung cấp cho khách hàng một trải nghiệm sống
          tiện nghi, hiện đại, liền mạch thông qua việc ứng dụng các công nghệ
          tiên tiến vào các giải pháp sản phẩm smart home, smart lighting, smart
          parking và smart security
        </p>
      </div>
    </header>
  );
};
export default SectionHeader;
