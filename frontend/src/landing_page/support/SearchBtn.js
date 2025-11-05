import React from "react";

function SearchBtn() {
  return (
    <nav style={{ backgroundColor: "#f4f2f2ff", width: "100%" }}>
      <div className="container mb-5">
        <div className="row p-5">
          <div className="btn d-flex gap-5">
            <h1>Support Portal</h1>
            <button
              type="button"
              className="btn btn-primary px-4 py-2 fw-semibold rounded-3"
              style={{
                backgroundColor: "#4285F4", // blue color similar to the image
                border: "none",
              }}
            >
              My tickets
            </button>
          </div>
          <div class="form-outline fs-2 p-5" data-mdb-input-init>
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Eg: How do i open my account, How do i activate F&O..."
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchBtn;
