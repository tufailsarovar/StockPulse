import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import { PlusCircle, ChevronDown } from "react-bootstrap-icons";

function Description({ Header, D1, D2, D3, D4, D5 }) {
  return (
    <div className="container mb-4">
      <Accordion className="shadow-sm rounded-3 border">
        <Accordion.Item eventKey="0" className="border-0">
          <Accordion.Header>
            <div className="d-flex align-items-center w-100">
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-start p-3"
                style={{ minWidth: "50px" }}
              >
                <PlusCircle color="#1a73e8" size={20} />
              </div>

              <div
                className="flex-grow-1 ps-3 fw-semibold text-secondary"
                style={{ fontSize: "1.5rem" }}
              >
                {Header}
              </div>

              <ChevronDown color="#1a73e8" size={18} />
            </div>
          </Accordion.Header>

          <Accordion.Body className="ps-5">
            <p>
              <ul>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      lineHeight: "40px",
                    }}
                  >
                    {D1}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      lineHeight: "40px",
                    }}
                  >
                    {D2}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      lineHeight: "40px",
                    }}
                  >
                    {D3}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      lineHeight: "40px",
                    }}
                  >
                    {D4}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      lineHeight: "40px",
                    }}
                  >
                    {D5}
                  </a>
                </li>
              </ul>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Description;
