import React from "react";

function LeftSection() {
  return (
    <div className="container">
      <div className="row border-top p-5">
        <div className="col-6 mt-4">
          <img src="media/Images/kite.png" alt="img" />
        </div>
        <div className="col-6 mt-2 p-5">
          <h1 className="fw-bold text-muted">Pulse</h1>
          <p
            className="text-muted mt-5"
            style={{ lineHeight: "45px", fontSize: "1.4rem" }}
          >
            Our ultra-fast flagship trading platform with <br /> streaming
            market data, advanced charts, an <br /> elegant UI, and more. Enjoy
            the Kite experience seamlessly on your Android <br /> and iOS
            devices.
          </p>
          <p>
            <a
              href="/"
              style={{
                textDecoration: "none",
                marginRight: " 80px",
                fontSize: "1.4rem",
              }}
            >
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                marginRight: " 80px",
                fontSize: "1.4rem",
              }}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
          <a href="/">
            <img src="media/Images/googlePlayBadge.svg" alt="google" />
          </a>
          <a href="/" style={{ marginLeft: "74px" }}>
            <img src="media/Images/appstoreBadge.svg" alt="apple" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
