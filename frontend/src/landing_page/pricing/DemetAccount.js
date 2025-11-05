import React from "react";

function DemetAccount() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row text-muted">
        <h2>
          <b>Demat AMC (Annual Maintenance Charge)</b>
        </h2>
        <div className="account border d-flex p-3 mt-3">
          <div className="col-6 fw-bold">
            <p style={{ fontSize: "1.2rem" }}>Value of holdings</p>
          </div>
          <div className="col-6 fw-bold">
            <p style={{ fontSize: "1.2rem" }}>AMC</p>
          </div>
        </div>
        <div className="description border d-flex">
          <div
            className="col-6 p-2"
            style={{ lineHeight: "30px", fontSize: "1.2rem" }}
          >
            <p>Up to ₹4 lakh</p>
            <p>₹4 lakh - ₹10 lakh</p>
            <p>Above ₹10 lakh</p>
          </div>
          <div className="col-6 p-2">
            <p>
              <button
                className="btn btn-success fw-bold px-4 py-1"
                style={{ borderRadius: "4px" }}
              >
                FREE
              </button>
            </p>
            <p> ₹ 100 per year, charged quarterly*</p>
            <p>₹ 300 per year, charged quarterly</p>
          </div>
        </div>
      </div>
      <p className="mt-3">
        <i class="fa-solid fa-star"></i> Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA, <a href="/" className="text-decoration-none">click here</a>.
      </p>
    </div>
  );
}

export default DemetAccount;
