import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Universe() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="container">
      <div className="row text-muted text-center">
        <h3 className=" p-5 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/" className="text-decoration-none">
            StockPulse.tech
          </a>{" "}
          blog.
        </h3>
        <h1 className="mt-4 mb-4">
          The{" "}
          <a href="/" className="text-decoration-none">
            StockPulse
          </a>{" "}
          Universe
        </h1>
        <h5>
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>

        <div className="col-4 p-5">
          <a href="/" className="text-decoration-none text-muted">
            <img src="media/Images/zerodha.png" alt="" />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Our asset management venture that is <br />
              creating simple and transparent index <br /> funds to help you
              save <br /> for your goals.
            </h5>
          </a>
          <a href="/" className="text-decoration-none text-muted">
            <img
              src="media/Images/streak.png"
              alt=""
              style={{ fontSize: "10px", marginTop: "20px" }}
            />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Systematic trading platform that <br /> allows you to create and{" "}
              <br /> backtest strategies without <br /> coding.
            </h5>
          </a>
        </div>

        <div className="col-4 p-5 mt-2">
          <a href="/" className="text-decoration-none text-muted">
            <img
              src="media/Images/sensibull.png"
              alt=""
              style={{ fontSize: "5px" }}
            />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and <br /> examine data points like open <br />{" "}
              interest, FII/DII, and more.
            </h5>
          </a>
          <a href="/" className="text-decoration-none text-muted">
            <img
              src="media/Images/smallcase.png"
              alt=""
              style={{ fontSize: "10px", marginTop: "27px" }}
            />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Thematic investing platform that helps <br /> you invest in
              diversified baskets of <br /> stocks on ETFs.
            </h5>
          </a>
        </div>

        <div className="col-4 p-5 mt-4">
          <a href="/" className="text-decoration-none text-muted">
            <img
              src="media/Images/tijori.png"
              alt=""
              style={{ fontSize: "10px" }}
            />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Investment research platform that <br /> offers detailed insights
              on stocks, sectors, <br /> supply chains, and more.
            </h5>
          </a>
          <a href="/" className="text-decoration-none text-muted">
            <img
              src="media/Images/ditto.png"
              alt=""
              style={{ fontSize: "10px", marginTop: "50px" }}
            />
            <h5 style={{ fontSize: "15px", lineHeight: "23px" }}>
              Personalized advice on life and <br /> health insurance. No spam{" "}
              <br /> and no mis-selling.
            </h5>
          </a>
        </div>
        {!isAuthenticated && (
          <button
            className="p-2 btn btn-primary fs-5 mb-4"
            onClick={(e) => loginWithRedirect()}
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        )}
      </div>
    </div>
  );
}

export default Universe;
