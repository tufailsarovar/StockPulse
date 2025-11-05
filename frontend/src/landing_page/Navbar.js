import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { he } from "@faker-js/faker";

function Navbar() {
  const { user, loginWithRedirect,isLoading, isAuthenticated, logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container">
        <Link class="navbar-brand" href="#">
          <img
            src="media/Images/logo.png"
            style={{ width: "15%" }}
            alt="Logo"
          />
          <img
            src="media/Images/logo-name.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0 ml-5">
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  style={{ fontSize: "1.3rem" }}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  style={{ fontSize: "1.3rem" }}
                  aria-current="page"
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  style={{ fontSize: "1.3rem" }}
                  aria-current="page"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  style={{ fontSize: "1.3rem" }}
                  aria-current="page"
                  to="/support"
                >
                  Support
                </Link>
              </li>
            </ul>
          </form>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              class="btn btn-primary rounded-circle p-2"
            >
              Logout
            </button>
          ) : (
            <button
              class="btn btn-primary rounded-circle p-2"
              onClick={(e) => loginWithRedirect()}
            >
              Signin
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
