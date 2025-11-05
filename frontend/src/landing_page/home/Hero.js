import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Hero() {
  const { user, loginWithRedirect,isLoading, isAuthenticated, logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="container text-center text-muted p-5 mb-4">
      <h2>
        {isAuthenticated && (
          <p style={{ fontSize: "15px text-center" }}>Hello, {user.name}</p>
        )}
      </h2>
      <h3>
        {isAuthenticated && (
          <a className="text-decoration-none" href="https://stockpulse-dashboard-ruddy.vercel.app">
            <img
              style={{ width: "70px" }}
              src="media/Images/logo.png"
              alt="Logo"
            />
            <p>Pulse</p>
          </a>
        )}
      </h3>
      <div className="row text-center">
        <img src="media/Images/HomeHero.png" alt="Admin Dashboard Insights" />
        <h1 className="mt-5">Invest In Everything</h1>
        <p>
          Online platform to invest in Stocks, drivaties, mutual funds and more.
        </p>
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

export default Hero;


