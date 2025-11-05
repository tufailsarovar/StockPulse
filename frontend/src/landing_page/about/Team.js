import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row p-5 border-top">
        <h1 className="text-center">Developer</h1>
      </div>
      <div className="row">
        <div className="col-6 p-4 text-center">
          <img
            src="media/Images/circle-logo.png"
            style={{ height: "450px", width: "450px", borderRadius: "100%" }}
          />
          <b>
            <h3 className="mt-4 text-muted">Tufail Sarovar</h3>
          </b>
          <b className="text-muted">
            <h5>Developer</h5>
          </b>
        </div>
        <div
          className="col p-5 mt-4 text-muted fs-5"
          style={{ lineHeight: "1.6" }}
        >
          <p className="mb-4">
            Tufail bootstrapped and founded StockPulse in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            StockPulse has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the XXXX Secondary Market Advisory Committee{" "}
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">
            Playing Chess and Kabaddi(State Champion) is his zen.
          </p>
          <p className="mb-4">
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
