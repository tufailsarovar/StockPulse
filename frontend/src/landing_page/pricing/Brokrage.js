import React from "react";

function Brokrage() {
  return (
    <div className="container">
      <div className="row text-muted text-center p-5 mt-5">
        <h2>
          <b>Charges</b>
        </h2>
        <h4 className="mb-5">List of all charges and taxes</h4>



        <div className="col-4 p-5">
          <img src="media/Images/pricing0.svg" alt="" />
          <h2>
            <b>Free equity delivery</b>
          </h2>
          <p
            style={{ fontSize: "18px", marginTop: "15px", lineHeight: "35px" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>



        <div className="col-4 p-5">
          <img src="media/Images/intradayTrades.svg" alt="" />
          <h2>
            <b>Intraday and F&O trades</b>
          </h2>
          <p
            style={{ fontSize: "18px", marginTop: "15px", lineHeight: "35px" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>



        <div className="col-4 p-5">
          <img src="media/Images/pricing0.svg" alt="" />
          <h2>
            <b>Free direct MF</b>
          </h2>
          <p
            style={{ fontSize: "18px", marginTop: "15px", lineHeight: "35px" }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
