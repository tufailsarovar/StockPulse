import React from "react";

function RightSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className="fw-bold text-muted mt-5">Console</h1>
          <p
            className="text-muted mt-5"
            style={{ lineHeight: "45px", fontSize: "1.4rem" }}
          >
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
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
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
            </p>
        </div>
        <div className="col-6">
          <img src="media/Images/console.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
